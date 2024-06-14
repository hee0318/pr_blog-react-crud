import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const handleTitleClick = (index) => {
    navigate("/detail", { state: { postIndex: index } });
  };

  useEffect(() => {
    const storedPosts = localStorage.getItem("updatedPosts");
    if (storedPosts) {
      setPost(JSON.parse(storedPosts));
    }
  }, []);

  return (
    <div>
      <div className="mainWrap">
        <div className="mainList">
          {post.length > 0 ? (
            post.map((item, index) => <li key={index}>{item.title}</li>)
          ) : (
            <p>게시글이 없습니다.</p>
          )}
        </div>

        <div className="mainImg">
          {post.map((item, index) => (
            <div className="post" key={index}>
              <img
                src="https://i.pinimg.com/564x/3d/6b/92/3d6b92e97da4b28d467ba76ce0262b22.jpg"
                alt="postImg"
              />
              <div className="title" onClick={() => handleTitleClick(index)}>
                {item.title}
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
