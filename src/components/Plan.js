import React, { useState, useEffect } from "react";
import "./css/plan.css";

export default function Plan({ company, plans }) {
  /**
   * The company object and plans array are passed as props.
   * set the value of plan in the company object to a variable companyPlan.
   */
  const { plan: companyPlan } = company;

  const [planName, setPlanName] = useState("");
  const [planDescription, setPlanDescription] = useState("");
  const [planValue, setPlanValue] = useState("");

  /**
   * Loop through the plans array to find which plan object is a match with
   * the company's plan name.
   */
  const getPlan = () => {
    let planData = plans.find((item) => {
      return item.name === companyPlan;
    });

    setPlanName(planData.name);
    setPlanDescription(planData.description);
    setPlanValue(planData.value);
  };

  useEffect(() => {
    getPlan();
  }, []);

  return (
    <div className="plan_container">
      <div className="plan_container_1">
        <p className="plan_name">{planName}</p>
        <p className="plan_value">
          <p className="plan_digit">€{planValue}.00</p>
          <span className="plan_month">/month</span>
        </p>
      </div>
      <p className="plan_description">{planDescription}</p>
      <button className="plan_button">Change Plan</button>
    </div>
  );
}
