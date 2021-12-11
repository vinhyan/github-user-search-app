import { createGlobalStyle } from "styled-components";

//---Colors----
//Light mode
const brightBlue = "#0079FF";
// const grey = "#697C9A";
const midnightBlue = "#4B6A9B";
// const darkBlue = "#2B3442";
const aqua = "#F6F8FF";
const white = "#FEFEFE";
// //Dark mode
const veryWhite = "#FFFFFF";
const black = "#141D2F";
const navyBlue = "#1E2A47";

//----- Dark Mode variables
export const lightMode = {
  body: aqua,
  fontColor: midnightBlue,
  titleColor: black,
  card: white,
  darkModeBtn: "#222731",
  boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
};

export const darkMode = {
  body: black,
  fontColor: veryWhite,
  titleColor: veryWhite,
  card: navyBlue,
  darkModeBtn: "#90A4D4",
  boxShadow: "none",
};

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Space Mono', monospace;
    }

    body {
        background: ${(prop) => prop.theme.body};
        padding: 31px 24px;

        h1 {
            font-size: 26px;
            line-height: 38px;
            color: ${(prop) => prop.theme.titleColor};
        }

        h2 {
            font-size: 16px;
            line-height: 33px;
            color: ${(prop) => prop.theme.titleColor};   
        }

        h3 {
            font-size: 13px;
            line-height: 24px;
            font-weight: normal;
        }

        h4 {
            font-size: 13px;
            line-height: 20px;
            font-weight: normal;
            color: ${(prop) => prop.theme.fontColor};
        }

        p {
            font-size: 13px;
            line-height: 25px;
            color: ${(prop) => prop.theme.fontColor};
        }

        a {
            color: ${brightBlue};
            text-decoration: none;
        }

        input {
            font-family: 'Space Mono', monospace;
            color: ${(prop) => prop.theme.fontColor};
            background: ${(prop) => prop.theme.card};

            &::placeholder {
                color: ${(prop) => prop.theme.fontColor};
            }

            &:focus {
                outline: none;
            }
        }

        svg {
            path {
                fill: ${(prop) => prop.theme.fontColor};
            }
        }

        footer {
            text-align: center;
            padding-top: 3rem;
        }

        @media (min-width: 768px) {
            padding: 140px 98px 236px 98px;

            h1 {
                font-size: 26px;
                line-height: 39px;
                
            }

            h2 {
                font-size: 22px;
                line-height: 33px;
                   
            }

            h3 {
                font-size: 16px;
                line-height: 24px;
                font-weight: normal;
            }

            h4 {
                font-size: 13px;
                line-height: 20px;
                font-weight: normal;
                
            }

            p {
                font-size: 15px;
                line-height: 25px;
                
            } 
            
        }

        @media (min-width: 1440px) {
            padding: 144px 355px 170px 355px;

            h2 {
                font-size: 26px;
            }
        }
    }

    

`;

export default GlobalStyle;
