import React from "react";
import reactDom from "react-dom";
let greeting;
const customStyle = {
  color: "red",
};

const time = new Date();
const msg = time.getHours();

if (msg <= "12") {
  greeting = "Good Morning";
} else if (msg > "12" && msg <= "18") {
  greeting = "Good Morning";
} else {
  greeting = "Good Evening";
}
function GetTime() {
  return <h1>{greeting}</h1>;
}

export default GetTime;
