const { fetchApod } = require("../services/apodService");

const getApod = async (req, res) => {
  try {
    const data = await fetchApod();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch APOD" });
  }
};

module.exports = { getApod };
