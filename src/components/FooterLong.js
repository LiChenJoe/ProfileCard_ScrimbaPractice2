import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faGitSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterLong() {
  return (
    <div className="profile--footer footer--long">
      <button>
        <FontAwesomeIcon icon={faTwitterSquare} />
        <h4>Twitter</h4>
      </button>
      <button>
        <FontAwesomeIcon icon={faLinkedin} />
        <h4>Linkedin</h4>
      </button>
      <button>
        <FontAwesomeIcon icon={faGitSquare} />
        <h4>GitHub</h4>
      </button>
    </div>
  );
}
