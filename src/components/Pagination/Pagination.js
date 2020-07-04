import styled from 'styled-components'

export const PaginationRow = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  a {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    color: #ff6600;
    font-weight: bold;
  }
  .prev {
    padding-right: 5px;
    border-right: 2px solid #ff6600;
    margin-right: 5px;
  }
  .active {
    color: #ff6600;
  }
  a[disabled] {
    color: #a9a9a9;
  }
`
