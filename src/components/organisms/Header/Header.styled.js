import styled from 'styled-components'

const HeaderWrapper = styled.div`
  position: fixed;
  background-color: #353535;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${({ mobile, open }) =>
    mobile ? (open ? '100vh' : '3.8rem') : '3.8rem'};
  overflow: hidden;
  transition: all 0.3s linear;

  > div {
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
    justify-content: flex-end;
    padding: 0 ${({ mobile }) => (mobile ? '1rem' : '3rem')};
    margin-top: ${({ mobile }) => (mobile ? '3.8rem' : '0')};
    width: 100%;
  }

  button {
    margin: 1rem;
  }
`

export default HeaderWrapper
