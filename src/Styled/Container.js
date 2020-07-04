import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`

export const List = styled.ul`
  li {
    padding: 5px 5px;
    display: flex;
    justify-content: space-between;
  }
  button {
    border: none;
    background: transparent;
  }
  .col-1 {
    flex-basis: 5%;
    padding-right: 5px;
  }
  .col-2 {
    flex-basis: 5%;
  }
  .col-3 {
    flex-basis: 5%;
  }
  .col-4 {
    flex-basis: 85%;
  }

  @media all and (max-width: 767px) {
    .table-row {
    }
    li {
      display: block;
    }
    .col {
      flex-basis: 100%;
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6c7a89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
`
