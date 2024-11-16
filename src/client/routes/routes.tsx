import App from "../App";
import { HomePage } from "../page/HomePage";
import JoinPage from "../page/JoinPage";
import LoginPage from "../page/LoginPage";
import MyPage from "../page/MyPage";

const routes = [
  {
    element: <App />,
    children: [
      {
        element: <HomePage />,
        path: "/",
        index: true, // exact: true 대신 index 속성을 사용할 수 있습니다.
      },
      {
        element: <LoginPage />,
        path: "/login",
      },
      {
        element: <JoinPage />,
        path: "/join",
      },
      {
        element: <MyPage />,
        path: "/my",
      },
    ],
  },
];

export default routes;
