// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import router from "./Routes/Routes";
// import React from "react";
// import { ConfigProvider } from "antd";
// import { mainTheme } from "./theme";
// import Providers from "./redux/lib/Providers";
// import { Toaster } from "sonner";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ConfigProvider theme={mainTheme}>
//       <Providers>
//         <Toaster richColors position={"top-center"} />
//         <RouterProvider router={router} />
//       </Providers>
//     </ConfigProvider>
//   </React.StrictMode>
// );

// Test 4 — Add Router
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const testRouter = createBrowserRouter([
  { path: "*", element: <h1 style={{color:"green",padding:"20px"}}>Router OK</h1> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={testRouter} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);