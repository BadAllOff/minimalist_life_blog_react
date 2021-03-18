import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.6;
}

img {
    max-width: 100%;
    display: block;
}

h1, 
h2,
h3 {
    font-family: 'Lora', serif;
    font-weight: 400;
    color: #143774;
    margin-top: 0;
}


h1 {
    font-size: 2rem;
    margin: 0;
}

h3 {
    color: #1792d2;
}

a {
    color: #1792d2;
}

a:hover,
a:focus {
    color: #143774;
}

strong {
    font-weight: 700;
}
.container {
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
}

.container-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media (min-width: 675px) {  
    .container-flex {
        flex-direction: row;
    }
    main {
        width: 70%;
    }
    
    aside {
        width: 25%;
        min-width: 200px;
        margin-left: 1em;
    }
}
.current-page {
    border-bottom: 1px solid #707070;
    color: #1792d2;
    transition: letter-spacing 250ms;
}

`;

export default GlobalStyle;
