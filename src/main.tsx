import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { FirstStepsApp } from "./FirstStepsApp";
import { MyHomeworkAppTwo } from "./MyHomeworkAppTwo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <FirstStepsApp /> */}
    <MyHomeworkAppTwo />
  </StrictMode>,
);
