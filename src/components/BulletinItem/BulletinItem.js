import styled from 'styled-components'

export const NewsItem = styled.li`
  background-color: #f6f6ef;
  &:nth-child(odd) {
    background: #d6d6c7;
  }
  .arrow-up {
    width: 0;
    height: 0;
    position: relative;
    top: -15px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid black;
  }
`
