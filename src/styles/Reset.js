import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    ul,
    li {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body {
        line-height: 1;
        font-family: 'Roboto';
    }
    ol,
    ul {
        list-style: none;
    }
`
