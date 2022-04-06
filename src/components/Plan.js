import React, { useState, useEffect } from "react";

export default function Plan({ company, plans }) {
  /**
   * The company object and plans array are passed as props.
   * set the plan value in the company object to a variable companyPlan.
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
  }, [planName, planDescription, planValue]);

  return (
    <div>
      {planName}
      <br />
      {planDescription}
      <br />
      {planValue}
    </div>
  );
}
