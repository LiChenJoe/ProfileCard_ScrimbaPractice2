import React from "react";
import Title from "./Title";
import Email from "./Email";
import Info from "./Info";

export default function MainEmail() {
  return (
    <div className="profile--main">
      <Title />
      <Email />
      <Info />
    </div>
  );
}
