import "./App.css";
import Home from "./components/HomeScreen/home";
import Earth from "./components/EarthScreen/earth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earth" element={<Earth />} />
        {/* <Route path="/mars" element={<Mars />} />
        <Route path="/asteroids" element={<Asteroids />} /> */}
      </Routes>
    </div>
  );
}

export default App;
