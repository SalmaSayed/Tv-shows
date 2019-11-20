const axios = require("axios").default;

export const getShows = () => {
  return axios.get(`http://api.tvmaze.com/shows`);
};

export const getSearchResults = searchInput => {
  return axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput}`);
};

export const getShow = id => {
  return axios.get(` http://api.tvmaze.com/shows/${id}`);
};
