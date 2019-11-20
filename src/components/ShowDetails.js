import React from "react";
import { getShow } from "../utils/APIs/axios";
import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
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
    let cleanString = "";
    if (this.state.show.summary)
      cleanString = this.state.show.summary.replace(/<[^>]*>/g, "");
    return (
      <div>
        <AppBar position="static" className="container">
          <Toolbar style={{ justifyContent: "space-between" }}>
            <NavLink to="/">
              <h2>Home</h2>
            </NavLink>
            {this.state.show.url && (
              <div>
                <Button className="details-button" href={this.state.show.url}>
                  More Details
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <div className="flex-horizontal">
          <ShowCard show={this.state.show} />
          <div>
            <Typography variant="h3" className="name">
              {this.state.show.name}
            </Typography>
            <Typography variant="h4" className="summary">
              {cleanString}
            </Typography>
          </div>
        </div>

        {this.state.show.rating && (
          <div>
            <Rating
              style={{ marginLeft: 70 }}
              name="customized-10"
              value={this.state.show.rating.average}
              readOnly
              max={10}
              size="large"
            />
          </div>
        )}
      </div>
    );
  }
}

export default ShowDetails;
