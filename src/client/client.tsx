import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

let router = createBrowserRouter(routes);
// 'app' ID를 가진 요소를 가져옵니다.
const appElement = document.getElementById("app");

if (appElement) {
  ReactDOM.hydrateRoot(appElement, <RouterProvider router={router} />);
} else {
  console.error("Error: 'app' element not found.");
}
