import styled from 'styled-components'
import Colors from './Colors'

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 0 10px;
  h2 {
    text-align: center;
  }
`

export const BorderContainer = styled.div`
  border-top: 4px solid ${Colors.orange};
  border-bottom: 6px solid ${Colors.orange};
  padding: 20px 0;
`
