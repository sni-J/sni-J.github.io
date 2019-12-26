import styled from 'styled-components'

const AppWrapper = styled.div`
  background-color: rgb(35, 35, 35);
  user-select: none;

  a {
    text-decoration: none;
    color: #fff;
    white-space: nowrap;

    :hover {
      color: #0ff;
    }
  }
`

export default AppWrapper
