import styled from 'styled-components'

export const NewsItem = styled.li`
  background-color: #ededda;
  &:nth-child(odd) {
    background: #d6d6c7;
  }

  @media all and (max-width: 767px) {
    .col {
      display: none;
    }
  }
`
export const Upvote = styled.button`
  font-size: 0;
  .arrow-up {
    width: 0;
    height: 0;
    cursor: pointer;
    position: relative;
    top: -15px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 14px solid #919191;
  }
`
export const MobileRow = styled.div`
  display: none;
  @media all and (max-width: 767px) {
    display: flex;
    padding: 8px;
  }
`
export const Link = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`
export const HideButton = styled.button`
  font-size: 10px;
  font-weight: bold;
  padding-left: 8px;
  cursor: pointer;
  @media all and (max-width: 767px) {
    font-size: 12px;
  }
`
export const Text = styled.span`
  font-size: 10px;
  @media all and (max-width: 767px) {
    font-size: 12px;
  }
`
export const Author = styled.span`
  font-size: 12px;
  font-weight: bold;
`
