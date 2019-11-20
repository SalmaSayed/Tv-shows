import React from "react";
import Grid from "@material-ui/core/Grid";
import ShowCard from "./ShowCard";

class Cards extends React.Component {
  render() {
    return (
      <Grid container={true} justify="flex-start">
        {this.props.showsList.map(show => (
          <ShowCard show={show} key={show.id} />
        ))}
      </Grid>
    );
  }
}

export default Cards;
