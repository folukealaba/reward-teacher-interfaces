import styled from "styled-components";

export const SendFundsStyles = styled.div`
  /* border: 2px solid blue; */
  width: 100%;
  display: flex;
  padding-top: 3%;
  /* gap: 2%; */
  /* background: #5FBB46; */
  background: rgb(87, 187, 67);
  background: linear-gradient(
    90deg,
    rgba(87, 187, 67, 1) 28%,
    rgba(66, 225, 244, 1) 100%
  );

  .left-side {
    /* border: 4px solid black; */
    margin: 5% 10%;
    width: 40%;
    /* background: #FBBC05; */
    /* filter: blur(400px); */
  }

  .left-side h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 58px;
    color: #ffffff;
    margin-bottom: 5.5%;
  }

  .left-side p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    word-spacing: 2px;
    color: #ffffff;
    margin-bottom: 5.5%;
  }

  .left-side button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 17px;
    color: #80b918;
    padding: 3% 8%;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .right-side {
    /* border: 3px solid black; */
    width: 55%;
    margin-right: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: #4285F4;
    filter: blur(300px); */
  }

  .right-side img {
    width: 100%;
    /* border: 2px solid red; */
    margin-right: 7%;
    margin-top: 2%;
  }
`;
