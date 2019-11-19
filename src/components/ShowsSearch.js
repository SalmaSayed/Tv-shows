import React from "react";
import { getShows, getSearchResults } from "../utils/APIs/axios";
import Cards from "./Cards";
import Header from "../components/Header";

export default class ShowSearch extends React.Component {
  state = {
    showsList: [],
    mouseEnter: false,
    hasShow: true
  };
  handleSearch = searchInput => {
    if (!searchInput) {
      getShows().then(response => {
        this.setState({
          showsList: response.data
        });
      });
    } else {
      getSearchResults(searchInput).then(response => {
        const newList = response.data.map(item => item.show);
        if (!newList.length) this.state.hasShow = false;
        else this.state.hasShow = true;
        this.setState({ showsList: newList });
      });
    }
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
        showsList: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        {!this.state.hasShow && (
          <div className="widget">
            <h1>No Matching results</h1>
          </div>
        )}
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
