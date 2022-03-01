import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faGitSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterShort() {
  return (
    <div className="profile--footer footer--short">
      <button>
        <FontAwesomeIcon
          icon={faTwitterSquare}
          font-size="2rem"
          color="#918e9b"
        />
        <h4>Twitter</h4>
      </button>
      <button>
        <FontAwesomeIcon icon={faGitSquare} font-size="2rem" color="#918e9b" />
        <h4>GitHub</h4>
      </button>
    </div>
  );
}
