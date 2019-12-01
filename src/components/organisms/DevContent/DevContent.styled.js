import styled from 'styled-components'

const DevContentWrapper = styled.div`
  box-sizing: border-box;
  background-color: rgb(35, 35, 35);
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;

  a {
    padding: 0.5rem;
    font-weight: 400;
  }
`

export default DevContentWrapper
