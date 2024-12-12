
'use client'

import "../styles/card.css";

function Card() {
 
  return (
    <div className="card-container">
        <div className="card-line workplace">
            <h4>Workplace Name 1 </h4>
            <p></p>
        </div>
        <div className="card-line">
            <div>
                <i className="fa-solid fa-dollar-sign"></i>120DH
            </div>
            <div>
                <i className="fa-regular fa-clock"></i>3h
            </div>
        </div>
        <div className="total-today">
           <h3>Total Today :</h3>  300DH
        </div>
       {/* <div className="card-line">
            <h4>Hours Worked : </h4>
            <p>8 h</p>
        </div>
        <div className="card-line">
            <h4>Pay Per Hour : </h4>
            <p>102 DH</p>
        </div>
        <div className="card-line">
            <h4>Total Earnings : </h4>
            <p>800 DH</p>
        </div>*/}
        
    </div>
  );
}

export default Card;