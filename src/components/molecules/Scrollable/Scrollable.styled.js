import styled from 'styled-components'

const ScrollableWrapper = styled.div`
  box-sizing: border-box;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  transition: all 0.3s linear;
`

export default ScrollableWrapper
