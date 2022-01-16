import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

:root {
    --darkCyan: hsl(185, 75%, 39%);
    --veryDarkDesaturatedBlue: hsl(229, 23%, 23%);
    --darkGrayishBlue: hsl(227, 10%, 46%);
    --darkGray: hsl(0, 0%, 59%);
}


html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

  body {
  height: 100vh;
  font-size: 18px;
  color: var(--veryDarkDesaturatedBlue);
  background-color: var(--darkCyan);
  font-family: "Kumbh Sans", sans-serif;
  background-image: url(images/bg-pattern-top.svg),
    url(images/bg-pattern-bottom.svg);
  background-repeat: no-repeat;
  background-position: bottom 40vh right 40vw, bottom -93vh left 30vw;

    margin: 0;
    padding: 0%;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${"" /* transition: all 0.50s linear; */}

    @media (min-width: 1440px) {
        
            background-position: bottom 40vh right 50vw, bottom -91vh left 48vw;
        
    }
    
  }

  

  input,
button,
textarea {
  margin: 0;
  border: none;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  outline: none;
  /* Browsers have different default form fonts */
  font-size: 13px;
  font-family: "Space Mono", monospace;
}

p {
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
}



  `;
