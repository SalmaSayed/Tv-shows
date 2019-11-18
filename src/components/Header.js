import React from "react";
import { IconButton, InputAdornment, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { debounce } from "lodash";

export default class Header extends React.Component {
  state = {
    searchText: undefined
  };
  handleSearch = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchText);
  };

  handleChangeInput = event => {
    event.preventDefault();
    this.setState({
      searchText: event.target.value.trim()
    });
  };
  render() {
    return (
      <div className="container">
        <InputBase
          className="input"
          id="search-text"
          type="text"
          name="searchInput"
          onChange={e => this.handleChangeInput(e)}
          endAdornment={
            <InputAdornment>
              <IconButton
                name="searchButton"
                onClick={e => this.handleSearch(e)}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
    );
  }
}
