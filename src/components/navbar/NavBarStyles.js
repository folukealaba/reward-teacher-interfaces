import styled from "styled-components";

export const NavBarStyles = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2% 10%;
    background: #fff;
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05));

    .logo-section {
        width: 30%;
        display: flex;
        align-items: center;
        gap: 2%;
        cursor: pointer;
    }

    .logo-section h3 {
        /* font-family: 'Inter'; */
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        color: #55A630;
    }

    .links-section {
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
        font-weight: 200;
        font-size: 21px;
        color: #012A4A;
        cursor: pointer;
    }

    #home {
        font-weight: 700;
        color: #80B918;
    }

    .links-section button {
        background: #80B918;
        border-radius: 5px;
        padding: 2% 5%;
        border: none;
        color: #fff;
        margin-left: 5%;
        cursor: pointer;
        font-size: 20px
    }

`