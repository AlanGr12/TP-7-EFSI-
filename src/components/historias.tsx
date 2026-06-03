import "./historias.css";

function historias() {
  const stories = [
    "https://picsum.photos/200?1",
    "https://picsum.photos/200?2",
    "https://picsum.photos/200?3",
    "https://picsum.photos/200?4",
    "https://picsum.photos/200?5",
    "https://picsum.photos/200?6",
    "https://picsum.photos/200?7",
    "https://picsum.photos/200?8",
    "https://picsum.photos/200?9",
    "https://picsum.photos/200?10"
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

            <span className="username">@user_name</span>
          </div>
        ))}

        <div className="next-arrow">›</div>
      </div>
    </section>
  );
}

export default historias;