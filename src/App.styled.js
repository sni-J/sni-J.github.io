import styled from 'styled-components'

const AppWrapper = styled.div`
  height: calc(100vh - 3.8rem);
  overflow-y: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(calc(100vh - 3.8rem));
  scroll-snap-type: y mandatory;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

export default AppWrapper
