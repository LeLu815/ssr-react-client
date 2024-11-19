import express, {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";
import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import routes from "./client/routes/routes";
import createFetchRequest from "./server/request";

const app = express();

app.use(express.static("public"));

let handler = createStaticHandler(routes);

app.get("*", async (req: ExpressRequest, res: ExpressResponse) => {
  const fetchRequest = createFetchRequest(req, res); // Fetch 요청에 필요한 URL과 init 객체 가져오기

  // fetchResponse를 StaticHandler.query에 전달
  const context = await handler.query(fetchRequest);

  // 필요한 후속 작업 수행
  // 예: 라우터 생성 및 HTML 렌더링 등
  // context가 StaticHandlerContext인지 확인
  if (context && typeof context === "object" && "matches" in context) {
    let router = createStaticRouter(handler.dataRoutes, context);

    let html = renderToString(
      <StaticRouterProvider router={router} context={context} />
    );

    res.send("<!DOCTYPE html>" + html);
  } else {
    // 에러 처리: context가 유효하지 않을 경우
    res.status(500).send("Error processing request");
  }
});

const listener = app.listen(3000, () => {
  let address = listener.address();

  // address가 null이 아닐 때만 port에 접근
  if (address && typeof address !== "string") {
    const { port } = address;
    console.log(`🚀 Server is listening on port http://localhost:${port}`);
  } else {
    console.error("Unable to determine the port.");
  }
});
