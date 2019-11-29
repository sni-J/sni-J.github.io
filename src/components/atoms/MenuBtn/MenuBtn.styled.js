import styled from 'styled-components'

const MenuBtnWrapper = styled.button`
  position: absolute;
  border: none;
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 1.8rem;
  height: 1.8rem;
  z-index: 10;
  justify-content: space-around;
  padding: 0;
  right: 0;
  outline: none;

  div {
    width: 1.8rem;
    height: 0.3rem;
    border-radius: 0.2rem;
    background: #fff;
    transition: all 0.3s linear;
    transfrom-origin: 1rem;

    :first-child {
      transform: ${({ open }) =>
        open
          ? 'translateY(0.6rem) rotate(-135deg)'
          : 'translateY(0) rotate(0)'};
    }

    :nth-child(2) {
      transform: ${({ open }) => (open ? 'rotate(-180deg)' : 'rotate(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    :last-child {
      transform: ${({ open }) =>
        open
          ? 'translateY(-0.6rem) rotate(-225deg)'
          : 'translateY(0) rotate(0)'};
    }
  }
`

export default MenuBtnWrapper
