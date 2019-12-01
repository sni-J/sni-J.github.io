import styled from 'styled-components'

const TabContentWrapper = styled.div`
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
`

export default TabContentWrapper