import styled from 'styled-components'

const CardsWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  > button {
    position: sticky;
    top: 50vh;
    background: none;
    border: none;
    width: 2rem;
    height: 2rem;
    outline: none;
    z-index: 1;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-width: 0.2rem 0 0 0.2rem;
      border-style: solid;
      border-color: rgb(255, 255, 255);
      cursor: pointer;
    }

    :nth-child(1) {
      left: 5vw;

      ::before {
        transform: rotate(-45deg);
        border-color: ${({ activeCard }) =>
          activeCard === 0 ? 'rgba(255, 255, 255, 0.3)' : ''};
        pointer-events: ${({ activeCard }) =>
          activeCard === 0 ? 'none' : 'all'};
      }
    }

    :nth-child(2) {
      left: calc(95vw - 2rem);

      ::before {
        transform: rotate(135deg);
        border-color: ${({ activeCard, lastCard }) =>
          activeCard === lastCard ? 'rgba(255, 255, 255, 0.3)' : ''};
        pointer-events: ${({ activeCard, lastCard }) =>
          activeCard === lastCard ? 'none' : 'all'};
      }
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    padding: 0 50vw;
  }
`

export default CardsWrapper
