import React from "react";
import Pic from "../profile_pic.jpeg";

export default function Photo() {
  return (
    <div className="profile--photo">
      <img src={Pic} alt="profile picture goes here" />
    </div>
  );
}
