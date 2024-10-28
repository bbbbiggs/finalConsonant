import React, { useState } from "react";

const One = () => {
  const [initialStatus, setInitialStatus] = useState(false);
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedValue = e.dataTransfer.getData("text/plain"); // 드래그된 값 가져오기
    // alert("드롭되었습니다!");
    console.log("드래그한 이미지", droppedValue);

    // const mouseValue =
    //   document.querySelectorAll(".syllable .mouse").dataset.value;
    // console.log("mousevalue:", mouseValue);

    if (droppedValue === "bieup") {
      // alert("!");
      setInitialStatus(true);
    }
  };

  const handleDragStart = (e, value) => {
    // console.log("드래그한 값:", value); // 콘솔에 value 값을 출력
    e.dataTransfer.setData("text/plain", value); // 드래그 데이터를 설정
  };

  return (
    <div className="backgroundColor">
      <div className="contentWrapper">
        <p>기초국어 | 튼튼</p>
        <hr />
        <p>빈칸에 알맞은 받침을 넣어 낱말을 완성해 봅시다.</p>
        <img src="" alt="" />

        <div className="quizWrapper">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/mouseImg.png`}
            alt=""
            draggable={false}
          />
          {/* 컴포넌트 */}
          <div
            className="syllable"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <img
              className="mouse"
              data-value="mouse"
              src={`${process.env.PUBLIC_URL}/assets/images/${
                initialStatus ? "mouse" : "mouse_before"
              }.png`}
              alt=""
              draggable={false}
            />
          </div>
        </div>
        {/* <div className="quizWrapper">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/footImg.png`}
            alt=""
            draggable={false}
          />
          컴포넌트
          <div
            className="syllable"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/${
                initialStatus ? "foot" : "foot_before"
              }.png`}
              data-value="foot"
              alt=""
              draggable={false}
            />
          </div>
        </div> */}
        {/* <hr /> */}
        <br />

        <div className="dragItemsWrapper">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/c_bieup.png`}
            alt=""
            // draggable
            onDragStart={(e) => handleDragStart(e, "bieup")}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/c_nieun.png`}
            onDragStart={(e) => handleDragStart(e, "rieul")}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/c_rieul.png`}
            onDragStart={(e) => handleDragStart(e, "nieun")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default One;
