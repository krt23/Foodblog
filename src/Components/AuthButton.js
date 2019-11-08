import React from "react";
import { Redirect } from "react-router-dom";
import { withAuth } from "./withAuth";

export default withAuth(({ isAuthorized, authorize }) =>
  isAuthorized ? (
    <Redirect to="/home" />
  ) : (
    <div>
      <h1>Авторизуйтеся</h1>
      <button onClick={authorize}>Вхід</button>
    </div>
  )
);
