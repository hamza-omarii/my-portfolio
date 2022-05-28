import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        color: #FFF;
    }
    body{
        background-color: #020c1a;
        font-family: "Poppins";
    }
    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: #0C244B;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.colors.primary_blue};
         border-radius: 1px;
    }

    ::-webkit-scrollbar-thumb:hover{
        background-color:#020c1a;
    }

    html{
        font-family: sans-serif;
        scroll-behavior: smooth;
        scrollbar-width: thin;
    }

`;
export default GlobalStyle;
