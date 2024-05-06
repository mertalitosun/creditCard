import React, { useState } from "react";
import "./App.css";
import crediCardChip from "./assets/images/crediCardChip.jpeg";

function App() {
  const currentDate = new Date();

  const [cardShow, setCardShow] = useState(true);
  const cvvFocus = () =>{
    setCardShow(false);
  }
  const cvvBlur = () =>{
    setCardShow(true);
  }
  const [creditCardInfo, setCreaditCardInfo] = useState({
    brand: "React Bank",
    cardNumber: "",
    month: "",
    year: "",
    name: "",
    cardType: "visa",
    cvv: "",
  });

  const handleChange = (e) => {
    
    let { name, value } = e.target;
   
    if(name === "cardNumber" && value.length > 16){
      value = value.slice(0, 16);
     
    }
    if(name === "month" && value > 12){
      value = 12;
    }
    if(name === "year" && value.length > 2){
      value = value.slice(0, 2)
    }
    if(name === "cvv" && value.length >3 ){
      value = value.slice(0, 3);
    }
    setCreaditCardInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 creditCardForms">
            <div className="creditCardForm">
              <div className="row">
                <label className="col-6">Name: </label>
                <input
                  type="text"
                  className="col-6"
                  name="name"
                  value={creditCardInfo.name}
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <label className="col-6">Card Number: </label>
                <input
                  type="number"
                  className="col-6"
                  name="cardNumber"
                  maxLength={16}
                  min={0}
                  value={creditCardInfo.cardNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <label className="col-6">Month</label>
                <input
                  type="number"
                  className="col-6"
                  name="month"
                  max={12}
                  value={creditCardInfo.month}
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <label className="col-6">Year</label>
                <input
                  type="number"
                  className="col-6"
                  name="year"
                  value={creditCardInfo.year}
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <label className="col-6">CVV: </label>
                <input
                  type="number"
                  className="col-6 cvv"
                  name="cvv"
                  min={0}
                  maxLength={3}
                  value={creditCardInfo.cvv}
                  onChange={handleChange}
                  onFocus={cvvFocus}
                  onBlur={cvvBlur}
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-8 creditCards">
          {cardShow ? (
              <div className="creditCard">
                <div className="cardTop">
                  <div className="cardBrand">{creditCardInfo.brand}</div>
                  
                  <div className="cardType">{creditCardInfo.cardType}</div>
                </div>
                <div className="cardChip">
                    <img src={crediCardChip} alt="Chip" />
                  </div>
                <div className="cardNumber">
                  {creditCardInfo.cardNumber || "#### #### #### ####"}
                </div>

                <div className="cardBottom">
                  <div className="cardName">{creditCardInfo.name || "YOUR NAME"}</div>
                  <div className="cardValidity">
                    <span>VALID THRU</span>
                    <span>{creditCardInfo.month || "MM"}/{creditCardInfo.year || "YY"}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="creditCardBack">
                <div className="cardBackCvv">{creditCardInfo.cvv}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;