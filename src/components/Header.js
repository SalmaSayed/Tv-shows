import React from "react";
import {
  IconButton,
  InputAdornment,
  InputBase,
  AppBar,
  Toolbar
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { debounce } from "lodash";

export default class Header extends React.Component {
  handleChangeInput = debounce(text => {
    this.props.handleSearch(text);
  }, 100);

  render() {
    return (
      <AppBar className="container" position="static">
        <Toolbar>
          <InputBase
            className="input"
            id="search-text"
            type="text"
            name="searchInput"
            onChange={event =>
              this.handleChangeInput(event.target.value.trim())
            }
            endAdornment={
              <InputAdornment>
                <IconButton name="searchButton">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </Toolbar>
      </AppBar>
    );
  }
}
