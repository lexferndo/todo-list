require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const errorHandler = require("./api/middleware/error-handler");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server API listening on PORT ${PORT}`);
});
