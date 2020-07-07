import styled, {keyframes} from 'styled-components'
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
export const LoaderContainer = styled.div`
  background: rgba(250, 250, 250, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 10;
  @media all and (max-width: 767px) {
    align-items: flex-start;
    padding-top: 100px;
  }
`
const rotate = keyframes`
  to {
    -webkit-transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid ${Colors.orange};
  border-radius: 50%;
  border-top-color: ${Colors.white};
  animation: ${rotate} 1s ease-in-out infinite;
  -webkit-animation: ${rotate} 1s ease-in-out infinite;
  }
`
