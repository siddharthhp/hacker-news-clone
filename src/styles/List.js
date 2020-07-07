import styled from 'styled-components'
import Colors from './Colors'

export const List = styled.ul`
  position: relative;
  li {
    padding: 8px 8px;
    display: flex;
    justify-content: space-between;
  }
  button {
    border: none;
    background: transparent;
  }
  .col-1 {
    flex-basis: 8%;
    padding-right: 5px;
  }
  .col-2 {
    flex-basis: 8%;
  }
  .col-3 {
    flex-basis: 8%;
  }
  .col-4 {
    flex-basis: 76%;
  }

  @media all and (max-width: 767px) {
    border-top: 30px solid ${Colors.orange};
    li {
      display: block;
    }
    .s-hidden {
      display: none;
    }
  }
`
