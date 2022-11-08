import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Heading from "./component";

const root = createRoot(document.getElementById("root"));
root.render(<Heading />);
