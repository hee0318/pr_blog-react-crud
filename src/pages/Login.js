import React, { useEffect, useRef, useState } from "react";

const Login = () => {
  // 입력필드값 검사용도 useRef
  const idInputRef = useRef(null);
  const pwInputRef = useRef(null);

  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  useEffect(() => {
    if (idInputRef.current) {
      idInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!idInputRef.current.value.trim() || !pwInputRef.current.value.trim()) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    const loginInfo = { id: idValue, password: pwValue };
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));

    alert("로그인 정보저장 완료.");

    window.location.reload();

    setIdValue("");
    setPwValue("");
  };

  const handleChangeId = (e) => {
    setIdValue(e.target.value);
  };
  const handleChangePw = (e) => {
    setPwValue(e.target.value);
  };

  return (
    <div className="loginWrap">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="아이디를 입력해주세요."
          ref={idInputRef}
          value={idValue}
          onChange={handleChangeId}
          required
        ></input>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          ref={pwInputRef}
          value={pwValue}
          onChange={handleChangePw}
          required
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
