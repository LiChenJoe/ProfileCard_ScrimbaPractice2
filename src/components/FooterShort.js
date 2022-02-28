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
        <FontAwesomeIcon icon={faTwitterSquare} />
        <h4>Twitter</h4>
      </button>
      <button>
        <FontAwesomeIcon icon={faGitSquare} />
        <h4>GitHub</h4>
      </button>
    </div>
  );
}
