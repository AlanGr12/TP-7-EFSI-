import {useEffect, useState } from "react";
import axios from "axios";
import "./historias.css";

function historias() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=8");
      setUsers(res.data.results);
      console.log(res.data.results);
      
    };
    fetchUsers();
  }, []);
  

  return (
    <section className="stories-container">
      <h1 className="stories-title">STORIES</h1>

      <div className="stories">
        <div className="next-arrow">‹</div>

        {users.map((user) => (
          <div className="story" key={user.login.uuid}>
            <div className="story-ring">
              <img src={user.picture.medium} alt="story" className="story-image" />
            </div>

            {/* Los ? son pq al principio vienen users undefined */}
            <span className="username">@{user.login.username || "user"}</span>
          </div>
        ))}

        <div className="next-arrow">›</div>
      </div>
    </section>
  );
}

export default historias;