import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Todos from "./Pages/Todos";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/todos",
      element: <Todos />,
    },
  ],
  {
    basename: "/appdev1-final-exam/", 
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
