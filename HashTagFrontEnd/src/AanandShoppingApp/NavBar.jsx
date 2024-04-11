import asika1logo from '../assets/asika1logo.png';
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="align_center gap_10">
        <img src={asika1logo} className="ashika_logo" />
        <input
          placeholder="Search by part of a title, an author, a publisher or ISBN"
          className="search_input"
        />
      </div>
      <div className="align_center">
        <p>Call Us:(+91) 8446520712</p>
      </div>
    </div>
  );
};

export default NavBar;
