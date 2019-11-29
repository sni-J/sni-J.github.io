import styled from 'styled-components'

const HomeContentWrapper = styled.div`
  background-color: #222;
  margin: 0;
  width: 100vw;
  height: calc(100vh - 3.8rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 70vw;
  }

  span {
    color: #fff;
    margin: 1rem 0;
  }

  a {
    padding: 1rem;
    text-decoration: none;
    color: #fff;

    :hover {
      color: #0ff;
    }
  }
`

export default HomeContentWrapper
