const axios = require("axios").default;

export const getShows = () => {
  return axios.get(`http://api.tvmaze.com/shows`);
};

export const getSearchResults = searchInput => {
  if (searchInput)
    return axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput}`);
  else return axios.get(`http://api.tvmaze.com/shows`);
};
