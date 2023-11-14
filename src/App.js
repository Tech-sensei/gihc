import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BsArrowUp } from "react-icons/bs";
import { Link as Scroll } from "react-scroll";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import AppLayout from "./layout/Applayout";
import { useGlobalContext } from "./contexts/context";
import Loading from "./components/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);

function App() {
  const { isLoading } = useGlobalContext();

  return (
    <div className="App" id="scroll">
      <RouterProvider router={router} />
      {/* eslint-disable-next-line */}
      <Scroll
        to="scroll"
        smooth={true}
        duration={300}
        offset={-70}
        className={"scrolltop"}
        id="scroll-top"
      >
        <BsArrowUp />
        <span>Scroll Up</span>
      </Scroll>
    </div>
  );
}

export default App;
