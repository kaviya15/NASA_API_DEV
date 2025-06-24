// src/pages/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import "./home.css";

function Home() {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/apod")
      .then((res) => {
        setApod(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch APOD");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="apod-container">
      <nav className="navbar">
        <div className="logo">🚀 Explore the Cosmos</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/earth">Earth View</Link>
          </li>
          <li>
            <Link to="/mars">Mars</Link>
          </li>
          <li>
            <Link to="/asteroids">Asteroid Radar</Link>
          </li>
        </ul>
      </nav>

      <div
        className="apod-hero"
        style={{ backgroundImage: `url(${apod.url})` }}
      >
        <div className="apod-overlay">
          <h1>Astronomy Picture of the Day</h1>
          <p>{apod.date}</p>
          <div className="apod-card">
            <h2>{apod.title}</h2>
            <p>{apod.explanation}</p>
            <div className="button-group">
              <a href={apod.hdurl} target="_blank" rel="noreferrer">
                Download
              </a>
              {/* <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  apod.title
                )}&url=${apod.url}`}
                target="_blank"
                rel="noreferrer"
              >
                Share
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
