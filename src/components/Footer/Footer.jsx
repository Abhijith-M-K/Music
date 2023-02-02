import React from "react";
import SeekBar from "../SeekBar/SeekBar";
import Pic from "../../img/images.jpeg";
import {
  BsPauseFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
} from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="seeker">
          <SeekBar />
        </div>
        <div className="music">
          <div className="footer_music">
            <img className="pic" src={Pic} alt="" />
          </div>
          <div className="song_name">ABCD</div>

          <div className="play">
            <BsFillSkipStartFill size={40} />

            <BsPauseFill size={40} />
            <BsFillSkipEndFill size={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
