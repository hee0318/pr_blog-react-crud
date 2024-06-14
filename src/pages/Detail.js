import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const [post, setPost] = useState([]);
  const { state } = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    const storedPosts = localStorage.getItem("updatedPosts");
    if (storedPosts && state?.postIndex !== undefined) {
      const posts = JSON.parse(storedPosts);
      const selectedPost = posts[state.postIndex];
      setPost(selectedPost);
    }
  }, [state]);

  if (!post) {
    return <div>게시글이 없습니다.</div>;
  }

  const handleUpdate = () => {
    navigator("/update", { state: { postIndex: state.postIndex } });
  };

  return (
    <div className="detailWrap">
      <label>제목</label>
      <div className="title">{post.title}</div>
      <label>내용</label>
      <div className="desc">{post.desc}</div>
      <button onClick={handleUpdate}>수정</button>
    </div>
  );
};

export default Detail;
