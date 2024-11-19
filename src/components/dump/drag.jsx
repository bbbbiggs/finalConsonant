import React from "react";

const drag = () => {
  const handleDragStart = (e, value) => {
    e.dataTransfer.setData("text/plain", value); // 드래그 데이터를 설정
  };

  const handleDrop = (e) => {
    const drag_word = e.dataTransfer.getData("text/plain"); // 드래그된 값 가져오기
    const data_value = e.target.getAttribute("data-value");
    console.log("드래그한이미지, 받침값: ", drag_word, "hi", data_value);

    if (drag_word === "watermelon" && data_value === "giyeok") {
      console.log("정답");
      setStageCount((stageCount) => stageCount + 1);
      document.querySelector(".watermelon").style.display = "none";
      document.querySelector(".list_watermelon").style.display = "block";
      document.querySelector(".list_water").style.display = "block";
    } else if (drag_word === "persimmon" && data_value === "mieum") {
      setStageCount((stageCount) => stageCount + 1);
      document.querySelector(".persimmon").style.display = "none";
      document.querySelector(".list_persimmon").style.display = "block";
    } else if (drag_word === "nurse" && data_value === "nieun") {
      alert("간호사 정답!");
    }
  };
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/watermelon.png`}
        alt=""
        className="watermelon"
        // draggable={false}
        onDragStart={(e) => handleDragStart(e, "watermelon")}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/persimmon.png`}
        alt=""
        className="persimmon"
        // draggable={false}
        onDragStart={(e) => handleDragStart(e, "persimmon")}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/two/quizImg/hospital.png`}
        alt=""
        draggable={false}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/nurse.png`}
        alt=""
        className="nurse"
        // draggable={false}
        // onDragStart={(e) => handleDragStart(e, "nurse")}
      />
    </div>
  );
};

export default drag;
