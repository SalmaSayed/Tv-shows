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
      const newList = response.data.map(item => item.show);
      this.setState({ showsList: newList });
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
    this.setState({ searchResult: false });
    getShows().then(response => {
      this.setState({
        showsList: response.data
      });
    });
  }

  render() {
    console.log(this.state.showsList);

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
