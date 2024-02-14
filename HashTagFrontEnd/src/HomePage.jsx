import React, { useState } from 'react';
import './CSS/Style.css';
import HashTagSvg from './assets/HashTagSvg.mp4';
import ShareOnFacebook from './ShareOnFacebook';
const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [copyText, setCopyText] = useState(false);
  const copy_function = (value) => {
    navigator.clipboard.writeText(value);
    setCopyText(true);
    setInterval(() => {
      setCopyText(false);
    }, 2000);
  };
  const shareUrl = 'https://hash-tag-xi.vercel.app/';
  return (
    <div className="home_page_container">
      <video className="home_page_container_icon" autoPlay autoFocus>
        <source src={HashTagSvg} type="video/mp4" autoFocus />
        Your browser does not support the video tag.
      </video>
      <button onClick={() => setShowModal(true)}>show</button>
      <ShareOnFacebook
        showModal={showModal}
        setShowModal={setShowModal}
        copy_function={copy_function}
        copyText={copyText}
        shareUrl={shareUrl}
      />
    </div>
  );
};

export default HomePage;
