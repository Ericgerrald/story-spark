import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./components/context.jsx";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AppProvider>
      <App />
      {/* <ToastContainer position="top-center" /> */}
    </AppProvider>
  </>
);