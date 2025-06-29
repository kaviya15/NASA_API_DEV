const express = require("express");
const cors = require("cors");
const apodRouter = require("./routes/apod");
const earthRouter = require("./routes/earth");
const marsRouter = require("./routes/mars");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/apod", apodRouter);
app.use("/api/earth", earthRouter);
app.use("/api/mars", marsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
