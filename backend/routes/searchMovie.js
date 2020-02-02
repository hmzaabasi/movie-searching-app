const router = require("express").Router();
const axios = require("axios");
const NodeCache = require("node-cache");
const moviesListCache = new NodeCache();
require("dotenv").config();

const apiBaseUrl = process.env.API_BASE_URL;

router.route("/search").get(async (req, res) => {
  try {
    let searchTerm = req.query.keyword;

    if (searchTerm) {
      if (moviesListCache.has(searchTerm)) {
        console.log("From Cache");

        res.json({ status: true, moviesList: moviesListCache.get(searchTerm) });
      } else {
        console.log("From API");

        let response = await Promise.all([
          axios.get(apiBaseUrl + "&s=" + searchTerm + "&page=1"),
          axios.get(apiBaseUrl + "&s=" + searchTerm + "&page=2")
        ]);

        let firstDataSet = response[0].data.Search
          ? [...response[0].data.Search]
          : [];
        let secondDataSet = response[1].data.Search
          ? [...response[1].data.Search]
          : [];
        // res.json(response[0].data.Search.concat(response[1].data.Search));
        let moviesList = [...firstDataSet, ...secondDataSet];

        moviesListCache.set(searchTerm, moviesList);
        res.json({ status: true, moviesList });
      }
    } else {
      res.status(400).json({ status: false, errorMessage: "Invalid Request." });
    }
  } catch (error) {
    res.status(400).json({ status: false, errorMessage: error.toString() });
  }
});

module.exports = router;
