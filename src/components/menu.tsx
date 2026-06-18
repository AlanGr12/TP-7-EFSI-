import "./menu.css";
import {
  FaHome,
  FaCompass,
  FaFilm,
  FaTv,
  FaBell,
  FaUser,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";

// Libreria de react-icons para los icons: https://react-icons.github.io/react-icons/

function menu() {
  return (
    <aside className="sidebar">

      {/* Profile */}
      <div className="profile-section">

        <div className="profile-ring">
          <img
            src="https://avatars.githubusercontent.com/u/108374610?v=4&size=64"
            alt="profile"
            className="profile-image"
          />
        </div>

        <div className="profile-info">
          <div className="name-row">
            <h2 className="profile-name">Alan Vitas</h2>

            <FaCheckCircle className="verified-icon" />
          </div>

          <p className="profile-username">@alanvitas</p>
        </div>

        {/* Stats */}
        <div className="stats-container">

          <div className="stat-box">
            <FaUser className="stat-icon" />

            <span className="stat-text">121K</span>
          </div>

          <div className="stat-box">
            <FaHeart className="stat-icon" />

            <span className="stat-text">900K</span>
          </div>

        </div>
      </div>

      {/* Menu */}
      <nav className="menu">

        <div className="menu-item active">
          <FaHome className="menu-icon" />
          <span>Home</span>
        </div>

        <div className="menu-item">
          <FaCompass className="menu-icon" />
          <span>Explore</span>
        </div>

        <div className="menu-item">
          <FaFilm className="menu-icon" />
          <span>Reels</span>
        </div>

        <div className="menu-item">
          <FaTv className="menu-icon" />
          <span>IGTV</span>
        </div>

        <div className="menu-item">
          <FaBell className="menu-icon" />
          <span>Notification</span>
        </div>

      </nav>

    </aside>
  );
}

export default menu;