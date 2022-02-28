import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Email() {
  return (
    <div className="profile--main--buttonArea email">
      <button className="email">
        <FontAwesomeIcon icon={faEnvelope} />
        <h4>Email</h4>
      </button>
    </div>
  );
}
