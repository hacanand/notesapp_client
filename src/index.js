import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoutesFromElements, Route } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotesApp from "./components/mainPage";
 
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NotesApp />}>
      <Route path="/groups/:id?" element={<NotesApp />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
