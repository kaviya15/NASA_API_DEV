import React, { useEffect, useState } from "react";
import axios from "axios";
import "./mars.css";

function Mars() {
  const [rover, setRover] = useState("curiosity");
  const [date, setDate] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    setDate(today);
    fetchPhotos(rover, today);
  }, []);

  const fetchPhotos = async (roverName, selectedDate) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/mars?rover=${roverName}&date=${selectedDate}`
      );
      setPhotos(res.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch Mars photos");
    }
    setLoading(false);
  };

  const handleDateChange = (e) => {
    const selected = e.target.value;
    setDate(selected);
    fetchPhotos(rover, selected);
  };

  const handleRoverChange = (e) => {
    const selectedRover = e.target.value;
    setRover(selectedRover);
    fetchPhotos(selectedRover, date);
  };

  return (
    <div className="mars-container">
      <h1>🚀 Mars Rover Gallery</h1>
      <p>Choose a rover and date to view its photos from Mars.</p>

      <div className="controls">
        <select value={rover} onChange={handleRoverChange}>
          <option value="curiosity">Curiosity</option>
          <option value="opportunity">Opportunity</option>
          <option value="spirit">Spirit</option>
        </select>
        <input type="date" value={date} onChange={handleDateChange} />
      </div>

      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}

      <div className="mars-grid">
        {photos.map((img, idx) => (
          <div className="mars-card" key={idx}>
            <img src={img.img_src} alt={img.camera.full_name} />
            <p>{img.camera.full_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mars;
