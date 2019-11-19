import React from "react";
import { IconButton, InputAdornment, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { debounce } from "lodash";

export default class Header extends React.Component {
  handleChangeInput = debounce(text => {
    this.props.handleSearch(text);
  }, 500);

  render() {
    return (
      <div className="container">
        <InputBase
          className="input"
          id="search-text"
          type="text"
          name="searchInput"
          onChange={event => this.handleChangeInput(event.target.value.trim())}
          endAdornment={
            <InputAdornment>
              <IconButton name="searchButton">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
    );
  }
}
