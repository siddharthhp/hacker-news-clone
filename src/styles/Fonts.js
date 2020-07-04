import {createGlobalStyle} from 'styled-components'
import Robotottf from '../fonts/Roboto-Regular.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${Robotottf}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
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
