import "./global.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import { GamePage } from "./pages/GamePage";
import { ResultPage } from "./pages/ResultPage";
import { AboutPage } from "./pages/AboutPage";
import { PlayerContext } from "./context/PlayerContext";
import { useState } from "react";

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
  const [players, setPlayers] = useState([]);

  return (
    <PlayerContext.Provider value={{ players, setPlayers }}>
      <RouterProvider router={router} />
    </PlayerContext.Provider>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
