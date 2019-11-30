import styled from 'styled-components'

const HomeContentWrapper = styled.div`
  background-color: #222;
  margin: 0;
  width: 100vw;
  height: calc(100vh - 3.8rem);
  overflow: hidden;
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  justify-content: center;
  align-items: center;

  img {
    max-width: 60vw;
    max-height: 10em;
    padding: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: ${({ mobile }) => (mobile ? 'center' : 'start')};
    padding: 2rem;
    border-left: ${({ mobile }) => (mobile ? '' : '1px solid #fff')};
  }

  span {
    color: #fff;
    font-weight: 800;
    text-align: center;
  }

  a {
    padding: 0.5rem;
    font-weight: 400;
    text-decoration: none;
    color: #fff;
    white-space: nowrap;

    :hover {
      color: #0ff;
    }
  }
`

export default HomeContentWrapper