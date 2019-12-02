import styled from 'styled-components'

const CardsWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: auto;
  scroll-snap-type: x mandatory;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    height: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin: 0 50vw;
  }
`

export default CardsWrapper
