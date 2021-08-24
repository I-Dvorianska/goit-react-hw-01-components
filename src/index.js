import React from "react";
import ReactDOM from "react-dom";
import { UserDescr } from "Profile/profile";
import user from "user.json";
// import "./index.css";
// import App from "./App";
// import "modern-normalize/modern-normalize.css";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <UserDescr
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />,
  document.getElementById("root")
);
