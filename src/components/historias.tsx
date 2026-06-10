import { use, useEffect, useState } from "react";
import axios from "axios";
import "./historias.css";

function historias() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=100");
      setUsers(res.data.results);
      console.log(res.data.results);
      
    };
    fetchUsers();
  }, []);


  const stories = [
    "https://picsum.photos/200?1",
    "https://picsum.photos/200?2",
    "https://picsum.photos/200?3",
    "https://picsum.photos/200?4",
    "https://picsum.photos/200?5",
    "https://picsum.photos/200?6",
    "https://picsum.photos/200?7",
    "https://picsum.photos/200?8"
  ];
  

  return (
    <section className="stories-container">
      <h1 className="stories-title">STORIES</h1>

      <div className="stories">
        <div className="next-arrow">‹</div>

        {stories.map((img, index) => (
          <div className="story" key={index}>
            <div className="story-ring">
              <img src={img} alt="story" className="story-image" />
            </div>

            {/* Los ? son pq al principio vienen users undefined */}
            <span className="username">@{users[index]?.login?.username || "user"}</span>
          </div>
        ))}

        <div className="next-arrow">›</div>
      </div>
    </section>
  );
}

export default historias;