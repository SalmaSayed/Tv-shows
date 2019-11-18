import React from "react";
import { IconButton, InputAdornment, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default class Header extends React.Component {
  handleSearch = e => {
    e.preventDefault();
    this.props.handleSearch(e.target.elements.searchInput.value.trim());
  };
  render() {
    return (
      <div className="container">
        <InputBase
          className="input"
          id="search-text"
          type="text"
          name="searchInput"
          endAdornment={
            <InputAdornment>
              <IconButton onClick={this.handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
    );
  }
}
