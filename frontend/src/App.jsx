import { useState } from "react";
import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import ErrorPage from "./pages/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/chats",
//     element: <Chatpage />,
//     errorElement: <ErrorPage />,
//   },
// ]);

function App() {
  return (
    <div className="App">
      {/* <Box
        width="100vw"
        height="100vh"
        bg="#222831"
        color="white"
        flex="1"
        h="100vh"
        w="100vw"
      >
        <RouterProvider router={router}></RouterProvider>
      </Box> */}
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
