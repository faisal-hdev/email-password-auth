import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterReactBootstrap from "./components/registerReactBootstrap";
import Main from "./components/layOut/Main";
import LoginBootstrap from "./components/LoginBootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <RegisterReactBootstrap></RegisterReactBootstrap>,
      },
      {
        path: "/register",
        element: <RegisterReactBootstrap></RegisterReactBootstrap>,
      },
      {
        path: "/login",
        element: <LoginBootstrap></LoginBootstrap>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
