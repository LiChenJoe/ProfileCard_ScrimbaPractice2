import React from "react";
import Photo from "./components/Photo";
import Main_Contacts from "./components/Main_Contacts";
import Main_Email from "./components/Main_Email";
import FooterShort from "./components/FooterShort";
import FooterLong from "./components/FooterLong";

export default function App() {
  return (
    <div className="container">
      <div className="box">
        <div className="card buttonContacts dark">
          <Photo />
          <Main_Contacts />
          <FooterShort />
        </div>
      </div>
      <div className="box">
        <div className="card buttonEmail dark">
          <Photo />
          <Main_Email />
          <FooterLong />
        </div>
      </div>
      <div className="box">
        <div className="card buttonContacts light">
          <Photo />
          <Main_Contacts />
          <FooterShort />
        </div>
      </div>
      <div className="box">
        <div className="card buttonEmail light">
          <Photo />
          <Main_Email />
          <FooterLong />
        </div>
      </div>
    </div>
  );
}
