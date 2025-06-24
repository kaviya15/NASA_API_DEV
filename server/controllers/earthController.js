const { fetchEarthImages } = require("../services/earthService");
const getEarthImages = async (req, res) => {
  const date = req.query.date;
  console.log("date,dae", date);

  if (!date) return res.status(400).json({ error: "Missing date parameter" });

  try {
    const images = await fetchEarthImages(date);
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Earth images" });
  }
};

module.exports = { getEarthImages };
