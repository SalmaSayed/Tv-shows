import React from "react";
import { getShow } from "../utils/APIs/axios";
import { Grid, Typography } from "@material-ui/core";
import ShowCard from "./ShowCard";
import { Rating } from "@material-ui/lab";

class ShowDetails extends React.Component {
  state = {
    show: {}
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
    return (
      <Grid container={true} justify="space-evenly">
        <Grid item={true}>
          <ShowCard show={this.state.show} />
        </Grid>
        {this.state.show.rating && (
          <Rating
            name="customized-10"
            value={this.state.show.rating.average}
            readOnly
            max={10}
          />
        )}
        <Grid item={true}>
          <Typography variant="h1">{this.state.show.name}</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default ShowDetails;
