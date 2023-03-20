import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Featured.scss";

const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  return (
    <section className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Now... you don't know this, but beneath <span>this building</span>{" "}
            lies the pet cemetery.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="Magnifying glass." />
              <input
                type="text"
                placeholder="Hey, ho, let's go!"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img
            src="./img/man2.png"
            alt="Image of Joey Ramone, lead singer of The Ramones."
          />
        </div>
      </div>
    </section>
  );
};
export default Featured;
