import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosts = localStorage.getItem("updatedPosts");
    if (storedPosts) {
      setPost(JSON.parse(storedPosts));
    }
  }, []);

  const handlePostDelete = (event, indexToDelete) => {
    event.stopPropagation();

    const updatedPosts = post.filter((_, index) => index !== indexToDelete);
    setPost(updatedPosts);
    localStorage.setItem("updatedPosts", JSON.stringify(updatedPosts));
  };

  const handleChangeDetail = (index) => {
    navigate("/detail", { state: { postIndex: index } });
  };

  const handleNavigate = () => {
    navigate("/write");
  };

  return (
    <div className="listWrap">
      <div className="write" onClick={handleNavigate}>
        글쓰기
      </div>
      {post.length > 0 ? (
        post.map((item, index) => (
          <div
            className="list"
            key={index}
            onClick={() => handleChangeDetail(index)}
          >
            <h2>{item.title}</h2>

            <button onClick={(event) => handlePostDelete(event, index)}>
              삭제
            </button>
          </div>
        ))
      ) : (
        <p>게시글이 없습니다.</p>
      )}
    </div>
  );
};

export default List;
