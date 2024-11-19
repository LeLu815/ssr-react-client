import { Request } from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

interface renderHtmlProps {
  req: Request;
}
const renderHtml = async ({ req }: renderHtmlProps) => {
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
