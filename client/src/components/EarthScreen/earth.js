// src/pages/Earth.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./earth.css";

function Earth() {
  const [date, setDate] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    setDate(today);
    fetchImages(today);
  }, []);

  const fetchImages = async (selectedDate) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/earth/?date=${selectedDate}`
      );
      setImages(res.data);
      setError(null);
    } catch (err) {
      setError("Failed to load Earth images");
    }
    setLoading(false);
  };

  const handleDateChange = (e) => {
    const selected = e.target.value;
    setDate(selected);
    fetchImages(selected);
  };

  return (
    <div className="earth-container">
      <h1>🌍 Earth From Space</h1>
      <p>Select a date to view Earth images taken by NASA's EPIC camera.</p>
      <input type="date" value={date} onChange={handleDateChange} />

      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}

      <div className="earth-grid">
        {images.map((img, idx) => (
          <div className="earth-card" key={idx}>
            <img src={img.url} alt={img.caption} />
            <p>{img.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Earth;
