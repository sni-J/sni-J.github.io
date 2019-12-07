import styled from 'styled-components'

const CardsWrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    display: flex;
    flex-direction: row;
    padding: 0 50vw;
  }
`

export default CardsWrapper
