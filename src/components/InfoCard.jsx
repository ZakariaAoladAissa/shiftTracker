
'use client'

import "../styles/card.css";

function InfoCard() {
 
  return (
    <div className="infocard-container">
            <h2>This Month's Numbers</h2>
            <br/>
            <h3>Total Earnings : </h3>
            <p>1200DH</p>
            <br/>
            <h3>Total Hours Worked : </h3>
            <p>24h</p>
    </div>
  );
}

export default InfoCard;