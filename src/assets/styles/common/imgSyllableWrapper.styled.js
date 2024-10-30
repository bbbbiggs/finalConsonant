import styled from "styled-components";

export const StyledImgSyllableWrapper = styled.div`
  @media (min-width: 1025px) {
    /* background-color: yellow; */
    display: grid;
    justify-content: center;
    justify-items: center;
    width: 100%;

    /* display: ${(props) => {
      if (props.$show === "show") return "inline-block";
      else {
        return "none";
      }
    }}; */
    transition: opacity 0.5s ease-in-out;

    opacity: ${(props) => {
      if (props.$show === "show") return "1";
      //   {
      //   console.log(1123123, props.$show);
      // }
      else {
        return "0";
      }
    }};

    .wordWrapper {
      display: flex;

      div + div {
        border-left: 0px;
      }
    }

    > img {
      width: 100%;
      /* width: 130px; */
      /* height: 110px; */
      border-radius: 10px;
      border: 1px solid #a8a9ad;
    }
  }
  @media (max-width: 1024px) {
    /* background-color: yellow; */
    display: grid;
    justify-content: center;
    justify-items: center;
    width: 100%;

    /* display: ${(props) => {
      if (props.$show === "show") return "inline-block";
      else {
        return "none";
      }
    }}; */
    transition: opacity 0.5s ease-in-out;

    opacity: ${(props) => {
      if (props.$show === "show") return "1";
      //   {
      //   console.log(1123123, props.$show);
      // }
      else {
        return "0";
      }
    }};

    .wordWrapper {
      display: flex;

      div + div {
        border-left: 0px;
      }
    }
    > img {
      width: 100%;
      height: 110px;
      border-radius: 10px;
      border: 1px solid #a8a9ad;
    }
  }
`;
