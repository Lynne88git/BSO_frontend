import React from "react";
import Properties from "../Properties/Properties";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="d-flex justify-content-center">
          <Properties />
        </div>
      </div>
    </div>
  );
};

export default Home;
