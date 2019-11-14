import React from "react";
import { Card } from "@material-ui/core";
const Cards = props => (
  <div>
    {props.showsList.map(show => (
      <Card title={show.name} key={show.id} />
    ))}
  </div>
);

export default Cards;
