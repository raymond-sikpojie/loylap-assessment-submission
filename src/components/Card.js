import React, { useState, useEffect } from "react";
import mastercard from "../images/mastercard.svg";
import visa from "../images/visa.svg";

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
   * render image base on the type of card it is.
   */
  const renderImage = () => {
    return (
      <div>
        {cardType === "mastercard" ? (
          <img src={mastercard} />
        ) : (
          <img src={visa} />
        )}
      </div>
    );
  };

  return (
    <div>
      {renderImage()}
      <p>{cardType}</p>
      <p>{lastFourDigits}</p>
      <p>{cardExpiry}</p>
    </div>
  );
}
