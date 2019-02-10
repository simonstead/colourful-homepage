import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../HomePage";
import Portfolio from "../Portfolio";

export const Router = () => (
  <BrowserRouter>
    <>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/portfolio"} component={Portfolio} />
    </>
  </BrowserRouter>
);

export default Router;
