import { useEffect, useState } from "react";
import axios from "axios";
import "./publicaciones.css";
import { FaHeart, FaRegHeart, FaRegComment, FaPaperPlane } from "react-icons/fa";

function publicaciones() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);


  //vector con los que se crea las publicaciones, start: , amount : y l
  const createPosts = (start, amount, usersList) =>
    Array.from({ length: amount }, (_, index) => {
      const id = start + index;
      const user = usersList[Math.floor(Math.random() * usersList.length)];

      return {
        id,
        image: `https://picsum.photos/800/600?random=${id}`,
        avatar: user.picture.medium,
        username: `@${user.login.username}`,
        liked: false,
        likes: Math.floor(Math.random() * 900) + 100,
        comments: [],
        showComments: false,
        newComment: "",
      };
    });

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=100");
      setUsers(res.data.results);
      setPosts(createPosts(1, 12, res.data.results));
    };
    fetchUsers();
  }, []);

  const loadMorePosts = () => {
    setPosts((prevPosts) => [
      ...prevPosts,
      ...createPosts(prevPosts.length + 1, 6, users),
    ]);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 400;

      if (nearBottom && users.length > 0) {
        loadMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [users]);

  const toggleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const toggleComments = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, showComments: !post.showComments }
          : post
      )
    );
  };

  const handleCommentChange = (id, value) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, newComment: value } : post
      )
    );
  };

  const addComment = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id && post.newComment.trim() !== ""
          ? {
              ...post,
              comments: [...post.comments, post.newComment],
              newComment: "",
            }
          : post
      )
    );
  };

  return (
    <div className="feed-layout">
      <div className="posts-column">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <img src={post.image} alt="post" className="post-image" />

            <div className="post-footer">
              <div className="post-user">
                <img src={post.avatar} alt="user" className="user-avatar" />
                <span>{post.username}</span>
              </div>

              <div className="post-actions">
                <button onClick={() => toggleLike(post.id)} className="icon-btn">
                  {post.liked ? <FaHeart className="liked" /> : <FaRegHeart />}
                </button>

                <button onClick={() => toggleComments(post.id)} className="icon-btn">
                  <FaRegComment />
                </button>

                <button className="icon-btn">
                  <FaPaperPlane />
                </button>
              </div>
            </div>

            <p className="likes-text">{post.likes} likes</p>

            {post.showComments && (
              <div className="comments-box">
                {post.comments.map((comment, index) => (
                  <p className="comment" key={index}>
                    <strong>@you</strong> {comment}
                  </p>
                ))}

                <div className="comment-form">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={post.newComment}
                    onChange={(e) =>
                      handleCommentChange(post.id, e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") addComment(post.id);
                    }}
                  />

                  <button onClick={() => addComment(post.id)}>Post</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="suggestions">
        <h3 className="suggestions-title">People you might know:</h3>
      </div>
    </div>
  );
}

export default publicaciones;