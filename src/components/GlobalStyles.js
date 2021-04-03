import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #525f7f;
        text-align: left;
        background-color: #fff;
    }

    .hero-section {
        transition: all 0.8s ease-in-out;
    }

    body.dark__mode .hero-section  {
        background: linear-gradient(35deg,#100f0f,#131b22) !important;
    }

    ul li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .container {
        width: 1040px;
        max-width: 95%;
        margin: auto;
    }



`;

export default GlobalStyles;
