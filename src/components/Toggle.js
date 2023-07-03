import { React, useState } from "react";


function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const bgColor = isOn ? "green" : "white";
  const color = isOn ? "white" : "black";
  return <button onClick={handleClick} style={{ background: bgColor, color: color }}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
