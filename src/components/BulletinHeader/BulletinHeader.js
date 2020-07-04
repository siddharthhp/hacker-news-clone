import styled from 'styled-components'

export const Header = styled.li`
  background-color: #ff6600;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: bold;
  color: #fff;
  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
  }
`
