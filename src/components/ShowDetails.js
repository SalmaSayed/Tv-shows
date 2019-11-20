import React from "react";
import { getShow } from "../utils/APIs/axios";
import { Grid, Typography } from "@material-ui/core";
import ShowCard from "./ShowCard";

class ShowDetails extends React.Component {
  state = {
    show: undefined
  };
  componentDidMount() {
    getShow(this.props.match.params.id).then(response => {
      console.log(response.data);
      this.setState({
        show: response.data
      });
    });
  }
  render() {
    console.log(this.state.show);
    return (
      <Grid container={true}>
        <Grid item={true}>
          <ShowCard show={this.state.show} />
        </Grid>
        <Grid item={true}>
          <Typography variant="heading">{this.state.show.name}</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default ShowDetails;
