import styled from "styled-components";

export const NavBarStyles = styled.nav`
    /* border: 2px solid red; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2% 10%;
    background: #fff;
    border: 2px solid yellow;
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05));

    .logo-section {
        border: 2px solid green;
        width: 30%;
        display: flex;
        align-items: center;
        gap: 2%;
    }

    .logo-section h3 {
        /* font-family: 'Inter'; */
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #55A630;
    }

    .links-section {
        border: 2px solid blue;
        width: 50%;
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .links-section ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        gap: 2.3em;

    }

    .links-section li {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #012A4A;
    }

    #home {
        font-weight: 700;
        color: #80B918;
    }

    .links-section button {
        
    }

`