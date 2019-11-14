const axios = require("axios").default;

let page = 1;
export const getShows = showList => {
  axios.get(`http://api.tvmaze.com/shows?page=:${page}`).then(response => {
    if (response.status === 404) return;
    else {
      //TODO scroll event handler getShow
      //Make sure showlist updated
      //make sure component will rerender
      page += 1;
      showList.push(...response.data);
    }
  });
};
