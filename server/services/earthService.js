const axios = require("axios");

const fetchEarthImages = async (date) => {
  const apiKey = process.env.API_KEY;
  const res = await axios.get(
    `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`
  );

  const images = res.data.map((img) => {
    const [year, month, day] = date.split("-");
    const url = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${img.image}.png`;
    return {
      url,
      caption: img.caption,
      time: img.date.slice(11, 19),
    };
  });

  return images;
};

module.exports = { fetchEarthImages };
