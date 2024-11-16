import express, {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";
import fetch from "node-fetch"; // node-fetch 가져오기
import { createStaticHandler } from "react-router-dom/server";
import routes from "./client/routes/routes";
import createFetchRequest from "./server/request";

const app = express();

app.use(express.static("public"));

let handler = createStaticHandler(routes);

app.get("*", async (req: ExpressRequest, res: ExpressResponse) => {
  const { url, init } = createFetchRequest(req, res); // Fetch 요청에 필요한 URL과 init 객체 가져오기
  const fetchResponse = await fetch(url, init); // node-fetch를 사용하여 요청 보내기

  // fetchResponse를 StaticHandler.query에 전달
  const context = await handler.query(fetchResponse as any); // fetchResponse를 any로 캐스팅하여 전달

  // 필요한 후속 작업 수행
  // 예: 라우터 생성 및 HTML 렌더링 등
});
