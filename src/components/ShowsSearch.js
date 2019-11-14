import React from "react";
import { getShows } from "../utils/APIs/axios";
import Cards from "./Cards";
import Header from "./Header";

export default class ShowSearch extends React.Component {
  state = {
    showsList: []
  };

  //   handleConcatShow = show => {
  //     this.setState(prevState => {
  //       showsList: prevState.showsList.concat(show);
  //     });
  //   };

  handleSearchShow = () => {};
  render() {
    getShows(this.state.showsList);

    return (
      <div>
        <Cards showsList={this.state.showsList} />
      </div>
    );
  }
}
