const { fetchMarsPhotos } = require("../services/marsService");

const getMarsPhotos = async (req, res) => {
  console.log("checkig ars");
  const { rover, date } = req.query;
  if (!rover || !date)
    return res.status(400).json({ error: "Missing rover or date parameter" });

  try {
    const photos = await fetchMarsPhotos(rover, date);
    console.log("phoetos", photos);
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Mars rover photos" });
  }
};

module.exports = { getMarsPhotos };
