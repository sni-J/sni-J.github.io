import styled from 'styled-components'

const MenuItemWrapper = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  outline: none;
  width: ${({ mobile }) => (mobile ? 'calc(100% - 2rem)' : 'auto')}
  height: 1.8rem;
  position: relative;
  padding: 0 0.5rem;
  text-align: left;

  span::before {
    content: '';
    position: absolute;
    background-color: #0ff;
    transition: all 0.3s ease-in-out;

    width: ${({ mobile, active }) =>
      mobile ? '0.1rem' : active ? 'calc(100% + .8rem)' : '0%'};
    height: ${({ mobile, active }) =>
      mobile ? (active ? 'calc(100% + .8rem)' : '0%') : '0.1rem'};
    left: ${({ mobile, active }) => (mobile ? '0' : active ? '-.4rem' : '')};
    top: ${({ mobile, active }) => (mobile ? (active ? '-.4rem' : '') : '')};
    right: -.4rem;
    bottom: -.4rem;
  }
`

export default MenuItemWrapper
