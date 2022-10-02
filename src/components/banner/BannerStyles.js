import styled from 'styled-components';

export const BannerStyles = styled.div`
    // border: 2px solid red;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 10%;
    background: #fff;
    height: 48em;

    .left-side-banner {
        // border: 2px solid green;
        width: 40%;
        margin-top: 6.5%;
    }

    .left-side-banner h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 80px;
        line-height: 90px;
        background: linear-gradient(104.55deg, #80B918 31.79%, #55A630 64.96%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-bottom: 6%;
    }

    .left-side-banner p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 25px;
        color: #03435F;
        margin-bottom: 5%;
    }

    .left-side-banner button {
        background: #80B918;
        border-radius: 4px;
        padding: 2.3% 5%;
        border: none;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
    }

    .right-side-banner {
        // border: 2px solid blue;
        background: rgba(0, 0, 0, 0.03);
        object-fit: cover;
        width: 50%;
        margin-bottom: 5%;
        display: flex;
        justify-content: center;
    }

    .right-side-banner img {
        width: 90%;
    }
`