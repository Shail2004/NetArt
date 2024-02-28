import React from "react";
const awardStyle = {
    display: "flex",
    justifyContent: "center"
};

const awardStyleMobile = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}
function Award() {
  return (
    <div style={window.innerWidth < 600 ? awardStyleMobile : awardStyle}>
      <div>
        <img src="./asserts/1.png" alt="award" style={{height: window.innerWidth < 600 ? "200px" : "600px"}} />
      </div>
      <div>
        <h4>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h4>
        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img src="./asserts/2.png" alt="award-received" style={{ width: window.innerWidth < 600 ? "400px" : "650px" }} />
        <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
      </div>
    </div>
  );
}

export default Award;
