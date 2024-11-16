import { Request } from "express";
import { renderToString } from "react-dom/server";
import { createStaticHandler, StaticRouter } from "react-router-dom/server";
import routes from "../client/routes/routes";

interface renderHtmlProps {
  req: Request;
}
const renderHtml = async ({ req }: renderHtmlProps) => {
  let { query, dataRoutes } = createStaticHandler(routes);
  const content = renderToString(
    <StaticRouter location={req.path}></StaticRouter>
  );

  return `
  <html>
  <head></head>
  <body>
    <div id="root">${content}</div>
    <script src="bundle.js"></script>
  </body>
  </html>
  `;
};

export default renderHtml;
