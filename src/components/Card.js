import React, { useState, useEffect } from "react";
import mastercard from "../images/mastercard.svg";
import visa from "../images/visa.svg";
import "../components/css/card.css";

export default function Card({ company, cards }) {
  /**
   * The company object and cards array are passed as props.
   * set the value of id in the company object to a variable companyPlan.
   */

  const { id: idOfCompany } = company;

  const [cardType, setCardType] = useState("");
  const [lastFourDigits, setLastFourDigits] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");

  /**
   * Loop through the cards array to find the object that is a match with
   * the id in company object
   */

  const getCard = () => {
    const cardData = cards.find((card) => {
      return card.companyId === idOfCompany;
    });

    setCardType(cardData.type);
    setCardExpiry(cardData.expiry);
    setLastFourDigits(cardData.lastFour);
  };

  useEffect(() => {
    getCard();
  }, []);

  /**
   * render image depending on the type of card it is.
   */
  const renderImage = () => {
    return (
      <div className="images">
        {cardType === "mastercard" ? (
          <img src={mastercard} />
        ) : (
          <img src={visa} />
        )}
      </div>
    );
  };

  return (
    <div className="card_container">
      <div className="card_container_1">
        {renderImage()}
        <p className="card_title">Credit Card</p>
      </div>
      <button className="card_button">Change</button>
      <div className="card_container_2">
        <p className="card_digits">
          <span>****</span>
          <span>****</span>
          <span>****</span>
          <span>{lastFourDigits}</span>
        </p>
        <p className="card_expiry">Expiry date {cardExpiry}</p>
      </div>
    </div>
  );
}
