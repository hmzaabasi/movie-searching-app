import axios from "axios";

const apiUrl = "http://localhost:3001/api/search?keyword=";
const ttl = 30000; // time in ms

export const getMovieListByKeyword = async searchTerm => {
  let cachedData = getFromCache(searchTerm);
  if (cachedData !== -1) {
    console.log("From browser storage");
    return cachedData;
  } else {
    console.log("From Server");
    let responseData = [];
    let response = await axios.get(apiUrl + searchTerm);
    if (response.data.status) {
      responseData = response.data.moviesList;
      setCache(searchTerm, responseData);
    }
    return responseData;
  }
};

const setCache = (searchTerm, data) => {
  localStorage.setItem(
    searchTerm,
    JSON.stringify({
      searchResult: data,
      timeStamp: new Date().getTime() + ttl
    })
  );
};

const getFromCache = searchTerm => {
  let data = localStorage.getItem(searchTerm);
  if (data !== null) {
    data = JSON.parse(data);
    if (isCacheAlive(data.timeStamp)) {
      return data.searchResult;
    } else {
      localStorage.removeItem(searchTerm);
      return -1;
    }
  } else {
    return -1;
  }
};

const isCacheAlive = timeStamp => {
  return new Date().getTime() <= timeStamp;
};
