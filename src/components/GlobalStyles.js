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
