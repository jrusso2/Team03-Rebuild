// api/itunes.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { term, media = "music" } = req.query;
  const encodedTerm = encodeURIComponent(term);

  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${encodedTerm}&media=${media}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from iTunes API" });
  }
};
