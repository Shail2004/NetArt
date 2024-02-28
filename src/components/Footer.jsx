import React from "react";

const footerStyle = {
  backgroundColor: "#ec3237",
  color: "white",
  paddingTop: "20px",
  paddingBottom: "20px",
  display: "flex",
  justifyContent: "space-around"
};

const symbolStyle = {
    height: "20px",
    marginRight: "6px"
}

const footerStyleMobile = {
    backgroundColor: "#ec3237",
    color: "white",
    padding: "20px 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  
const symbolStyleMobile = {
    height: "16px",
    marginRight: "6px",
  };
  
function Footer() {
  return (
    <div style={window.innerWidth < 600 ? footerStyleMobile : footerStyle}>
      <div>
        <img src="./asserts/phone-call.png" alt="phone" style={window.innerWidth < 600 ? symbolStyleMobile : symbolStyle}
        ></img>
        <span>Toll free 1800 200 1234</span>
      </div>
      <div>
        <img src="./asserts/facebook.png" alt="facebook" style={window.innerWidth < 600 ? symbolStyleMobile : symbolStyle}
        ></img>
        <span>www.facebook.com/cripumps</span>
      </div>
      <div>
      <img src="./asserts/globe.png" alt="website" style={window.innerWidth < 600 ? symbolStyleMobile : symbolStyle}></img>
        <span>www.crigroups.com</span>
      </div>
    </div>
  );
}

export default Footer;
