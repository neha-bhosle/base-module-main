import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { theme } from "./utils/theme.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
// ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
