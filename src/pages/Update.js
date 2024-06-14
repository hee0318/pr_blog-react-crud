import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Update = () => {
  const [updateTitle, setUpdateTitle] = useState();
  const [updateDesc, setUpdateDesc] = useState();
  const { state } = useLocation();

  const navigate = useNavigate();
  const postIndex = state?.postIndex;

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("updatePosts")) || [];

    if (storedPosts[postIndex]) {
      setUpdateTitle(storedPosts[postIndex].title);
      setUpdateDesc(storedPosts[postIndex].desc);
    }
  }, [postIndex]);

  const handleUpdateTitle = (e) => {
    setUpdateTitle(e.target.value);
  };

  const handleUpdateDesc = (e) => {
    setUpdateDesc(e.target.value);
  };

  const handleUpdate = () => {
    const storedPosts = JSON.parse(localStorage.getItem("updatedPosts")) || [];
    if (storedPosts[postIndex]) {
      storedPosts[postIndex].title = updateTitle;
      storedPosts[postIndex].desc = updateDesc;
      localStorage.setItem("updatedPosts", JSON.stringify(storedPosts));
    }
    navigate("/detail", { state: { postIndex } });
  };

  return (
    <div>
      <div className="updateWrap">
        <label>제목</label>
        <input
          type="text"
          value={updateTitle}
          placeholder="수정할 제목을 입력해주세요."
          onChange={handleUpdateTitle}
        />
        <label>내용</label>
        <textarea
          value={updateDesc}
          placeholder="수정할 내용을 입력해주세요."
          onChange={handleUpdateDesc}
        />
        <input type="file"></input>
        <button onClick={handleUpdate}>등록</button>
      </div>
    </div>
  );
};

export default Update;
