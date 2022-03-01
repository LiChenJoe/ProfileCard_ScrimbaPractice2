import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contacts() {
  return (
    <div className="profile--main--buttonArea contacts">
      <button className="email">
        <FontAwesomeIcon icon={faEnvelope} />
        <h4>Email</h4>
      </button>
      <button className="Linkedin">
        <FontAwesomeIcon icon={faLinkedin} color="#fff" />
        <h4>Linkedin</h4>
      </button>
    </div>
  );
}
