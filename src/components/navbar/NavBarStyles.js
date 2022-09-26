import styled from "styled-components";

export const NavBarStyles = styled.nav`
    border: 2px solid red;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1% 9%;

    .logo {
        display: flex;
    }

    .logo-section {
        border: 2px solid green;
        width: 20%;
    }

    .links-section {
        border: 2px solid blue;
        width: 40%;
    }

    .links-section ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
    }
`