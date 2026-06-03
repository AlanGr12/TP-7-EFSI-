import './header.css';

function Header() {
  return (
  <nav className="navbar">

    <div className="logo">
      <i className="fa-brands fa-instagram"></i>
      <span>Instagram</span>
    </div>

    <div className="search-box">
      <i className="fa-solid fa-magnifying-glass"></i>

      <input
        type="text"
        placeholder="Username, hashtag and story search"
      />
    </div>

    <div className="right-section">

      <i className="fa-solid fa-gear icon"></i>

      <i className="fa-regular fa-camera icon"></i>

      <i className="fa-regular fa-paper-plane icon"></i>

      <button className="post-btn">
        <i className="fa-solid fa-plus"></i>
        New Post
      </button>

    </div>

  </nav>
  );
}
export default Header;