import React from "react";
import ReactDOM from "react-dom/client";
import reducer, { initialState } from "./Componenets/State/reducer.jsx";
import { StateProvider } from "./Componenets/State/StateProvider.jsx";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  
);
