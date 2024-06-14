import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigator = useNavigate("");
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
  const userId = loginInfo?.id; //loginInfo에 id 있나 확인.

  const handleRemoveInfo = () => {
    localStorage.removeItem("loginInfo");
    navigator("/login");
    window.location.reload(); //login 후 재랜더링
  };

  const handleChange = () => {
    navigator("/");
  };

  const onInputSearch = (event) => {
    if (event.key === "Enter") {
      if (event.target.value.trim() !== "") {
        alert("검색 기능 실행");
      } else {
        alert("검색어를 입력해주세요.");
      }
    }
  };

  return (
    <>
      <div className="headerWrap">
        <div className="logo" onClick={handleChange}>
          HEE's Blog
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/write">Write</Link>
            </li>
          </ul>
        </nav>
        <div className="search">
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            onKeyDown={onInputSearch}
          ></input>
        </div>
        <div className="user">
          {userId ? (
            <>
              <p className="userId">{userId}님 반가워요 👋🏻</p>
              <div className="logout" onClick={handleRemoveInfo}>
                logout
              </div>
            </>
          ) : (
            <Link to="/login">
              <div className="login">login</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
