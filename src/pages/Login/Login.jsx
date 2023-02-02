import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="Container">
        <div className="signin">Sign In</div>
        <div className="para">
          Please enter your mobile number to login. We will send you a <br />{" "}
          otp to verify your number
        </div>
        <div className="phone">
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
        </div>

        <div className="submit_button">
          <button
            onClick={() => {
              navigate("/otp");
            }}
          >
            Signin
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
