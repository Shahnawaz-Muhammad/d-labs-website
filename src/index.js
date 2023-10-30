import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { AnimatePresence } from "framer-motion";
=======
>>>>>>> 117ef61 (footer, other pages, routing, active navItems)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
<<<<<<< HEAD
     <AnimatePresence mode="wait">
     <App />
     </AnimatePresence>
=======
      <App />
>>>>>>> 117ef61 (footer, other pages, routing, active navItems)
=======
        <App />
>>>>>>> ab60a54 (testimonials, faq's component, pages-titles)
    </BrowserRouter>
  </React.StrictMode>
);
