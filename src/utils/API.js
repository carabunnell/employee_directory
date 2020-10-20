import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
