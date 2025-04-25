/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import Loader from "./common-components/loader/loader";
import { Provider } from "react-redux";
import store from "./redux/store";
import SnackbarAlert from "./common-components/alert/alert";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box, Tooltip } from "@mui/material";
import Draggable from "react-draggable";
import DragIndicatorSharpIcon from "@mui/icons-material/DragIndicatorSharp";
import { useEffect, useState } from "react";
import { removeDataFromLocalStorage } from "./utils/localStorage";
import UserAgent from "./components/userAgent/userAgent";

function App() {
  const [open, setOpen] = useState(false);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false
      }
    }
  });

  const handleStop = (event: any, dragElement: any) => {
    // localStorage.setItem("x", dragElement.x);
    // localStorage.setItem("y", dragElement.y);
  };

  function isChromeBrowser() {
    const userAgent = navigator.userAgent;
    const isChrome = /Chrome/.test(userAgent);
    const isEdge = /Edg/.test(userAgent);

    return isChrome && !isEdge;
  }

  useEffect(() => {
    const handleBeforeUnload = () => {
      removeDataFromLocalStorage("clinicalNotesData");
    };

    setOpen(!isChromeBrowser());

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <Box
      id="appPage"
      sx={{
        position: "relative",
        height: "100vh"
      }}>
      <Draggable onStop={handleStop}>
        <Box
          id="parent"
          style={{
            display: "none",
            position: "absolute",
            zIndex: 1101
          }}>
          <Tooltip
            title={
              "If you encounter a scenario where you're unable to move your cursor away from the video screen and it keeps dragging, first try double-clicking on blue bar. If that doesn't work, then attempt to right-click on the blue bar. Afterward, double-click on the blue bar again."
            }
            sx={{
              zIndex: "100000000000000"
            }}>
            <Box
              id="dragIcon"
              sx={{
                height: "0.5rem",
                background: "#0d72ed",
                display: "none",
                cursor: "grab",
                color: "white",
                position: "relative !important"
              }}
            />
          </Tooltip>
          <iframe
            id="iFrame"
            style={{
              display: "none",
              position: "absolute",
              zIndex: 1101
            }}></iframe>{" "}
          <Tooltip
            title={
              "If you encounter a scenario where you're unable to move your cursor away from the video screen and it keeps dragging, first try double-clicking on blue bar. If that doesn't work, then attempt to right-click on the blue bar. Afterward, double-click on the blue bar again."
            }
            sx={{
              zIndex: "100000000000000"
            }}>
            <Box
              id="dragIcon1"
              sx={{
                height: "0.5rem",
                background: "#0d72ed",
                display: "none",
                cursor: "grab",
                color: "white",
                bottom: "-15px !important",
                position: "absolute !important",
                width: "100% !important"
              }}
            />
          </Tooltip>
        </Box>
      </Draggable>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
          <Loader />
          <SnackbarAlert />
        </Provider>
      </QueryClientProvider>
      {/* <UserAgent setOpen={setOpen} open={open} /> */}
    </Box>
  );
}

export default App;
