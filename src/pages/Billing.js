import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Plan from "../components/Plan";
import Card from "../components/Card";

function Billing({ plans = [], cards = [], company = null }) {
  const navigate = useNavigate();
  // console.log(company);
  // console.log(plans);
  //console.log(cards);

  if (!company) {
    navigate("/");
  }

  return (
    <React.Fragment>
      <Link to="/">Go back to select</Link>
      <Box>
        <h3>Current Plan</h3>
        {/*TODO: delete this and replace with your UI component*/}
        <Plan company={company} plans={plans} />

        <h3>Payment Method</h3>
        {/*TODO: delete this and replace with your UI component*/}
        <Card company={company} cards={cards} />
      </Box>
    </React.Fragment>
  );
}

export default Billing;
