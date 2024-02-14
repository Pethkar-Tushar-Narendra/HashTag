const ShareRow = ({ icon, text, onClick }) => {
  return (
    <div className="share_row" onClick={onClick}>
      <div className="share_row__title_icon">
        <img src={icon} />
        <p>{text}</p>
      </div>
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <path
            d="M10 7L15 12L10 17"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{' '}
        </g>
      </svg>
    </div>
  );
};

export default ShareRow;
