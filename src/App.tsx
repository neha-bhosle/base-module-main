/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Tooltip } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Draggable from "react-draggable";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import SnackbarAlert from "./common-components/alert/alert";
import Loader from "./common-components/loader/loader";
import store from "./redux/store";
import { router } from "./routes/routes";
import { removeDataFromLocalStorage } from "./utils/localStorage";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  const handleStop = () => {
    // localStorage.setItem("x", dragElement.x);
    // localStorage.setItem("y", dragElement.y);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      removeDataFromLocalStorage("clinicalNotesData");
    };

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
        height: "100vh",
      }}
    >
      <Draggable onStop={handleStop}>
        <Box
          id="parent"
          style={{
            display: "none",
            position: "absolute",
            zIndex: 1101,
          }}
        >
          <Tooltip
            title={
              "If you encounter a scenario where you're unable to move your cursor away from the video screen and it keeps dragging, first try double-clicking on blue bar. If that doesn't work, then attempt to right-click on the blue bar. Afterward, double-click on the blue bar again."
            }
            sx={{
              zIndex: "100000000000000",
            }}
          >
            <Box
              id="dragIcon"
              sx={{
                height: "0.5rem",
                background: "#0d72ed",
                display: "none",
                cursor: "grab",
                color: "white",
                position: "relative !important",
              }}
            />
          </Tooltip>
          <iframe
            id="iFrame"
            style={{
              display: "none",
              position: "absolute",
              zIndex: 1101,
            }}
          ></iframe>{" "}
          <Tooltip
            title={
              "If you encounter a scenario where you're unable to move your cursor away from the video screen and it keeps dragging, first try double-clicking on blue bar. If that doesn't work, then attempt to right-click on the blue bar. Afterward, double-click on the blue bar again."
            }
            sx={{
              zIndex: "100000000000000",
            }}
          >
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
                width: "100% !important",
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
    </Box>
  );
}

export default App;
