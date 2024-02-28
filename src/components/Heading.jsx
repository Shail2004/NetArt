import React from "react";
const headerStyle = {
  display: "flex",
  justifyContent: "center",
  height: "100px",
};

const headerStyleMobile = {
  display: "flex",
  justifyContent: "center",
  height: "80px",
};
function Heading() {
  return (
    <div style={window.innerWidth < 600 ? headerStyleMobile : headerStyle}>
      <img src="./asserts/logo.png" alt="Logo" />
    </div>
  );
}

export default Heading;
