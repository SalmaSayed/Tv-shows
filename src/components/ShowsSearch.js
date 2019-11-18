import React from "react";
import { getShows, getSearchResults } from "../utils/APIs/axios";
import Cards from "./Cards";
const axios = require("axios").default;
import Header from "../components/Header";

export default class ShowSearch extends React.Component {
  state = {
    showsList: [],
    mouseEnter: false
  };
  handleSearch = searchInput => {
    getSearchResults(searchInput).then(response => {
      this.setState({
        showsList: response.data
      });
      console.log("salma");
      this.render();
    });
  };
  handleMouseOver = () => {
    this.setState({
      mouseEnter: true
    });
  };
  handleMouseLeave = () => {
    this.setState({
      mouseEnter: false
    });
  };
  componentDidMount() {
    getShows().then(response => {
      this.setState({
        showsList: this.state.showsList.concat(response.data)
      });
    });
  }

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        <Cards
          mouseEnter={this.state.mouseEnter}
          showsList={this.state.showsList}
          handleMouseLeave={this.handleMouseLeave}
          handleMouseOver={this.handleMouseOver}
        />
      </div>
    );
  }
}
