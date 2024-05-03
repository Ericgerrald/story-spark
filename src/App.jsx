import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Game,
  GameInstruction,
  GameLogin,
  HomeLayout,
  Landing,
  SingleStory,
  Error,
  SingleError,
} from "./pages";

import { action as loginAction } from "./pages/GameLogin";

import { action as contactAction } from "./pages/About";
import { ToastContainer } from "react-toastify";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleBookLoader } from "./pages/SingleStory";
import { loader as gameLoader } from "./pages/Game";
import { loader as instructionLoader } from "./pages/GameInstruction";
// import { loader as loginLoader } from "./pages/GameLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SingleError />,
        loader: landingLoader,
      },
      {
        path: "/about",
        element: <About />,
        action: contactAction,
      },
      {
        path: "/singlestory/:id",
        errorElement: <SingleError />,
        loader: singleBookLoader,
        element: <SingleStory />,
      },
      {
        path: "/gamelogin/:id",
        element: <GameLogin />,
        action: loginAction,
        // loader: loginLoader,
      },
      {
        path: "/gameinstruction/:id",
        loader: instructionLoader,
        element: <GameInstruction />,
      },
      {
        path: "/game/:id",
        loader: gameLoader,
        element: <Game />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
