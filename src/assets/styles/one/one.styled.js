import styled from "styled-components";
export const StyledOne = styled.div`
  overflow-x: hidden;
  display: grid;
  justify-content: center;

  /* display: flex; */
  /* flex-direction: row; */
  @media (min-width: 1025px) {
    .backgroundColor {
      /* min-height: 100vh; */
      background-color: #fef7ea;
      width: 700px;
    }
  }
  @media (max-width: 1024px) {
    .backgroundColor {
      /* min-height: 100vh; */
      background-color: #fef7ea;
      /* width: 700px; */
    }
  }
  .contentWrapper {
    width: 90%;
    /* height: 700px; */
    margin: auto;
    position: relative;
    padding-top: 20px;
    /* background-color: yellow; */
  }
  hr {
    margin: 5px 0;
  }

  .quizWrapper {
    /* background-color: yellow; */
    display: inline-block;
    text-align: center;
    margin-right: 10px;
  }
  .quizWrapper img {
    width: 150px;
  }

  .firstWrapper {
    display: flex;
    justify-content: center;
    gap: 50px;
  }
`;
