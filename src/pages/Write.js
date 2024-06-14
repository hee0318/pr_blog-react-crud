import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");

  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = () => {
    const newPost = { title, desc };
    if (file) {
      newPost.file = file.name;
    }
    const storedPosts = JSON.parse(
      localStorage.getItem("updatedPosts") || "[]"
    );
    const updatedPosts = [...storedPosts, newPost];

    localStorage.setItem("updatedPosts", JSON.stringify(updatedPosts));
    navigate("/list");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <div>
      <div className="writeWrap">
        <form>
          <label>제목</label>
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={handleTitleChange}
          />
        </form>
        <form>
          <label>내용</label>
          <textarea
            type="text"
            placeholder="내용을 입력해주세요."
            value={desc}
            onChange={handleDescChange}
          />
          <label for="input-file"></label>
          <input
            type="file"
            id="input-file"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </form>
        <button type="button" onClick={handleSubmit}>
          입력
        </button>
      </div>
    </div>
  );
};

export default Write;
