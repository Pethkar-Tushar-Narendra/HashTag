import React from 'react';
import './CSS/Style.css';
import HashTagSvg from './assets/HashTagSvg.mp4';
const HomePage = () => {
  return (
    <div className="home_page_container">
      <video className="home_page_container_icon" autoPlay>
        <source src={HashTagSvg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="share">Share</button>
    </div>
  );
};

export default HomePage;
