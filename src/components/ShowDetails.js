import React from "react";
import { getShow } from "../utils/APIs/axios";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Link,
  Box
} from "@material-ui/core";
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
      <div>
        <AppBar position="static" className="container">
          <Toolbar>
            <Link to="/">
              <h2>Tv-shows</h2>
            </Link>
          </Toolbar>
        </AppBar>
        <Grid container={true} justify="flex-start">
          <Grid item={true} xs={4}>
            <ShowCard show={this.state.show} />
          </Grid>
          <Grid item={true} xs={2}>
            <Typography variant="h1">{this.state.show.name}</Typography>
          </Grid>
          {this.state.show.rating && (
            <Rating
              name="customized-10"
              value={this.state.show.rating.average}
              readOnly
              max={10}
              xs={4}
            />
          )}
        </Grid>
      </div>
    );
  }
}

export default ShowDetails;
