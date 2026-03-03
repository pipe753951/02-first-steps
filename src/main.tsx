import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { FirstStepsApp } from "./FirstStepsApp";
import { MyHomeworkApp } from "./MyHomeworkApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <FirstStepsApp /> */}
    <MyHomeworkApp></MyHomeworkApp>
  </StrictMode>,
);
