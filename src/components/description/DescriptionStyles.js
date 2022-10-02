import styled from 'styled-components';

export const DescriptionStyles = styled.div`
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    background: rgba(255, 242, 235, 0.6);
    padding: 6% 10%;

    .left-side {
        width: 40%;
    }

    .left-side h2  {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 48px;
        color: #012A4A;
        margin-bottom: 5%;
    }

    #left-text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: #012A4A;
        margin-bottom: 8%;
    }


    .right-side {
        width: 50%;
        /* border: 2px solid black; */
        position: relative;
    }

    .right-side img {
        width: 85%;
        /* border: 2px solid blue; */
        position: absolute;
        top: 25%;
        right: 0;
        padding: 0;
        margin: 0;
    }

`