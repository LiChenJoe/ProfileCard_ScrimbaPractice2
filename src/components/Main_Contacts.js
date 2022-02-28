import React from "react";
import Title from "./Title";
import Contacts from "./Contacts";
import Info from "./Info";

export default function Main_Contacts() {
  return (
    <div className="profile--main">
      <Title />
      <Contacts />
      <Info />
    </div>
  );
}
