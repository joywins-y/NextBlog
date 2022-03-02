import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../../components/Login";

export default function Index() {
  return (
    <BrowserRouter>
      <Route path="/login/" exact component={Login} />
    </BrowserRouter>
  );
}
