import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>home 컴포넌트 입니다.</h1>
      <button
        onClick={() => {
          navigate("/Works");
        }}
      ></button>
    </div>
  );
};

export default Home;
