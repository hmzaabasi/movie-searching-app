const express = require("express");
const cors = require("cors");

const searchMovieRoute = require("./routes/searchMovie");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api", searchMovieRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
