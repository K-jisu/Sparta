import React, { useState } from "react";
import supabase from "../supabaseClient";

const UpdateData = () => {
  const [targetId, setTargetId] = useState(0);
  const [address, setAddress] = useState("");

  const handleChange = async () => {
    const { error } = await supabase
      .from("NACAMP_SAMPLE")
      .update({
        address,
      })
      .eq("id", targetId);

    if (error) {
      console.log(error);
    } else {
      alert("수정이 되었습니다.");
    }
  };
  return (
    <div>
      <h2>데이터 수정 로직</h2>
      id :{" "}
      <input
        type="number"
        value={targetId}
        onChange={(e) => {
          setTargetId(e.target.value);
        }}
      />
      수정 주소 :{" "}
      <input
        type="text"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <button onClick={handleChange}>수정</button>
    </div>
  );
};

export default UpdateData;
