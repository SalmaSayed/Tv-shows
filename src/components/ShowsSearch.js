import React from "react";
import { getShows, getSearchResults } from "../utils/APIs/axios";
import Cards from "./Cards";
import Header from "../components/Header";

export default class ShowSearch extends React.Component {
  state = {
    showsList: [],
    hasShow: true
  };

  handleSearch = searchInput => {
    if (searchInput) {
      getSearchResults(searchInput).then(response => {
        const newList = response.data.map(item => item.show);
        if (!newList.length) this.state.hasShow = false;
        else this.state.hasShow = true;
        this.setState({ showsList: newList });
      });
    } else {
      getShows().then(response => {
        this.setState({
          showsList: response.data
        });
      });
    }
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
        />
      </div>
    );
  }
}
