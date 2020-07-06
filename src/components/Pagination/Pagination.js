import styled from 'styled-components'
import Colors from '../../styles/Colors'

export const PaginationRow = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  a {
    font-size: 16px;
    color: ${Colors.orange};
    font-weight: bold;
  }
  .prev {
    padding-right: 5px;
    border-right: 2px solid ${Colors.orange};
    margin-right: 5px;
  }
  .active {
    color: ${Colors.orange};
  }
  a[disabled] {
    color: ${Colors.darkGrey};
  }
  @media all and (max-width: 767px) {
    justify-content: space-between;
    .prev {
      border-right: none;
    }
  }
`
