import React from "react";
import "./home.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home_container">
      <Link to="/a">
        <Button variant="contained">Contained</Button>
      </Link>
      <Link to="/b">
        <Button variant="outlined">Outlined</Button>
      </Link>
      <Link to="/c">
        <Button variant="contained">Contained</Button>
      </Link>
      <Link to="/d">
        <Button variant="outlined">Outlined</Button>
      </Link>
    </div>
  );
};

export default Home;
