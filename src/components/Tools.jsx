import React from "react";
const toolStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const toolStyleMobile = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  
const verticalStyle = {
  border: "none",
  borderRight: "1px solid red",
  paddingRight: "3px",
  paddingLeft: "3px"
};

function Tools() {
  return (
    <div style={toolStyle}>
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src="./asserts/3.png" alt="Tools" style={{ width: window.innerWidth < 600 ? "400px" : "1200px" }} />
      <p style={{ fontSize: "17px" }}>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr
        style={{
          color: "rgba(165, 34, 38, 255)",
          height: "1px",
          border: "none",
          backgroundColor: "red",
          width: "100%",
        }}
      />
      <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
      <p style={{textAlign:"center"}}>
        <span style={verticalStyle}>CHEMICALS & PROCESS</span>
        <span style={verticalStyle}>POWER</span>
        <span style={verticalStyle}>WATER & WASTE WATER</span>
        <span style={verticalStyle}>OILS & GAS</span>
        <span style={verticalStyle}>PHARMA</span>
        <span style={verticalStyle}>SUGARS & DISTILLERIES</span>
        <span style={verticalStyle}>PAPER & PULP</span>
        <span style={verticalStyle}>MARINE & DEFENCE</span>
        <span style={verticalStyle}>METAL & MINING</span>
        <span style={verticalStyle}>FOOD & BEVERAGE</span>
        <span style={verticalStyle}>PETROCHEMICAL & REFINERIES</span>
        <span style={verticalStyle}>SOLAR</span>
        <span style={verticalStyle}>BUILDING</span>
        <span style={verticalStyle}>HVAC</span>
        <span style={verticalStyle}>FIRE FIGHTING</span>
        <span style={{paddingLeft: "3px"}}>AGRICULTURE & RESIDENTIAL</span>
      </p>
    </div>
  );
}

export default Tools;
