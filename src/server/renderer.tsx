import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

export default (req, store, context) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={context}></StaticRouter>
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
