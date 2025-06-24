const axios = require("axios");

const fetchMarsPhotos = async (rover, date) => {
  const apiKey = process.env.API_KEY;
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=${apiKey}`;
  const res = await axios.get(url);
  console.log("Res", res);
  return res.data.photos;
};

module.exports = { fetchMarsPhotos };
