import React, { useState } from "react";
import "./Otp.css";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="Container">
        <div className="otp_signin">OTP Verification</div>
        <div className="otp_para">
          We have sent and otp to +919072711213.Please enter the code to recieve
          to verify.
        </div>
        <div className=" otp_input">
          <input type="text" className="input-container" maxlength="1" />
          <input type="text" className="input-container" maxlength="1" />
          <input type="text" className="input-container" maxlength="1" />
          <input type="text" className="input-container" maxlength="1" />
        </div>

        <div className="submit_button">
          <button
            className=""
            onClick={() => {
              navigate("/home");
            }}
          >
            verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
