const axios = require("axios");

const fetchApod = async () => {
  const apiKey = process.env.API_KEY;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = { fetchApod };
