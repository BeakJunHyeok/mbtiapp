import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Result from "./pages/Result";
import Home from "./pages/Home";
import Question from "./pages/Question";
// import SimKyungha from "./fonts/SimKyungha.ttf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
  font-family: "SimKyungha";
  src: url("/fonts/SimKyungha.ttf") format("truetype");
}
* {
  margin: 0px;
  padding:0px;
  box-sizing: border-box;
}

ul,li {
  list-style: none;
}

a{
  text-decoration: none;
  color: inherit;
}

body{
  font-family: "SimKyungha";
  background: url("https://png.pngtree.com/thumb_back/fw800/background/20230910/pngtree-kitten-sitting-on-laptop-in-a-window-image_13163177.png") center/cover no-repeat;
  height: 100vh;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
