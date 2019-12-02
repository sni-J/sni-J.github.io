import styled from 'styled-components'

import no_img from '../../../static/images/bg_img/no_img.png'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  filter: ${({ active }) => (active ? '' : 'brightness(0.5) blur(5px)')};
  transform: ${({ active }) => (active ? '' : 'scale(0.8)')};
  transition: all 0.3s linear;
  pointer-events: ${({ active }) => (active ? '' : 'none')};

  .plane {
    background-color: rgb(53, 53, 53);
    width: 20rem;
    max-width: 80vw;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);

    scroll-snap-align: center;

    position: relative;
    padding: 0.5rem;
    box-sizing: border-box;

    div.images {
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5) inset;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      z-index: 0;

      background-size: contain;
      background-image: url(${no_img});
      background-image: ${({ name }) =>
        name
          ? `url(${require(`../../../static/images/bg_img/${name}.png`)})`
          : ''};

      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;

      div.logo {
        position: absolute;
        bottom: -0.5rem;
        right: -0.5rem;
        width: 10rem;
        padding-bottom: 0.5rem;
        padding-right: 0.5rem;
        border-top-left-radius: 0.5rem;
        z-index: 1;

        background: linear-gradient(
          rgba(53, 53, 53, 0.3),
          rgb(53, 53, 53, 1) 90%
        );

        > img {
          display: block;
          box-sizing: border-box;
          width: 100%;
          padding: 1rem;
        }
      }
    }

    div.description {
      margin-top: 0.5rem;
      padding: 0.5rem;

      > h1 {
        font-size: 1.5rem;
        margin: 0;
        color: #fff;
        font-weight: 800;
      }

      > span {
        color: rgba(255, 255, 255, 0.87);
      }
    }
  }

  .links {
    display: flex;
    flex-direction: ${({ mobile }) => (mobile ? 'row' : 'column')};

    .link {
      background-color: rgb(53, 53, 53);
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);

      margin-top: ${({ mobile }) => (mobile ? '-.5rem' : '0.5rem')};
      margin-left: ${({ mobile }) => (mobile ? '0.5rem' : '-.5rem')};
      padding-left: ${({ mobile }) => (mobile ? '0' : '0.5rem')};
      padding-top: ${({ mobile }) => (mobile ? '0.5rem' : '0')};
      border-top-right-radius: ${({ mobile }) => (mobile ? '0' : '0.5rem')};
      border-bottom-left-radius: ${({ mobile }) => (mobile ? '0.5rem' : '0')};
      border-bottom-right-radius: 0.5rem;
    }

    span {
      color: rgba(255, 255, 255, 1);
      font-weight: 400;
    }
  }
`

export default CardWrapper
