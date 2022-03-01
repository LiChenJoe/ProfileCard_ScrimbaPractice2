import React from "react";
import Photo from "./components/Photo";
import MainContacts from "./components/MainContacts";
import MainEmail from "./components/MainEmail";
import FooterShort from "./components/FooterShort";
import FooterLong from "./components/FooterLong";

export default function App() {
  return (
    <div className="container">
      <div className="box">
        <div className="card buttonContacts dark">
          <Photo />
          <MainContacts />
          <FooterShort />
        </div>
      </div>
      <div className="box">
        <div className="card buttonEmail dark">
          <Photo />
          <MainEmail />
          <FooterLong />
        </div>
      </div>
      <div className="box">
        <div className="card buttonContacts light">
          <Photo />
          <MainContacts />
          <FooterShort />
        </div>
      </div>
      <div className="box">
        <div className="card buttonEmail light">
          <Photo />
          <MainEmail />
          <FooterLong />
        </div>
      </div>
    </div>
  );
}
