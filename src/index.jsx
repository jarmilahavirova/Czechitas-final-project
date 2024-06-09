import "./global.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import { GamePage } from "./pages/GamePage";
import { ResultPage } from "./pages/ResultPage";
import { AboutPage } from "./pages/AboutPage";
import { PlayersProvider } from "./PlayersContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

const App = () => {
  return (
    <PlayersProvider>
      <RouterProvider router={router} />
    </PlayersProvider>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
