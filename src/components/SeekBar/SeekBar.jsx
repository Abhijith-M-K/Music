import React from "react";
import "./SeekBar.css";
import { Slider, Switch } from "antd";
import { useState } from "react";

const SeekBar = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  return (
    <div class="slidecontainer">
      <Slider defaultValue={30} disabled={disabled} />
    </div>
  );
};

export default SeekBar;
