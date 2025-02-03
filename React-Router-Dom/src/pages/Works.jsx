import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Works = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <h1>Works 페이지 입니다.</h1>
      <div>현재 페이지 : {location.pathname.slice(1)}</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      ></button>
      <Link to={"/Contact"}>contact 페이지로 이동하기</Link>
    </div>
  );
};

export default Works;
