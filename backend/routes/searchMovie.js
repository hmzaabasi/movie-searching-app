const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

let Movie = require("../models/movie.model");
const apiBaseUrl = process.env.API_BASE_URL;

router.route("/search").get(async (req, res) => {
  try {
    let abc = await Promise.all([
      axios.get(apiBaseUrl + "&s=nuls&page=1"),
      axios.get(apiBaseUrl + "&s=nuls&page=2")
    ]);
    let firstDataSet = abc[0].data.Search ? [...abc[0].data.Search] : [];
    let secondDataSet = abc[1].data.Search ? [...abc[1].data.Search] : [];
    //console.log(abc[0].data.Search);
    // res.json(abc[0].data.Search.concat(abc[1].data.Search));
    res.json([...firstDataSet, ...secondDataSet]);
  } catch (error) {
    res.status(400).json({ err: error.toString() });
  }
});

module.exports = router;

const getMovies = async () => await axios.get(apiBaseUrl + "&s=abc");
