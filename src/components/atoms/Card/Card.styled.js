import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  filter: ${({ active }) => (active ? '' : 'brightness(0.5) blur(10px)')};
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
      background-image: ${({ background }) => `url(${background})`};

      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;

      div.logo {
        position: absolute;
        bottom: -1px;
        right: -1px;
        padding: 0 1px 1px 0;
        border-top-left-radius: 0.5rem;
        z-index: 1;

        background: linear-gradient(
          rgba(53, 53, 53, 0.1) 0%,
          rgba(53, 53, 53, 0.5) 80%,
          rgba(53, 53, 53, 0.8) 90%,
          rgba(53, 53, 53, 1) 95%
        );

        > img {
          display: block;
          box-sizing: border-box;
          height: 5rem;
          padding: 1rem;
        }

        ::before {
          content: '';
          position: absolute;
          bottom: 1px;
          right: 1px;
          border-top-left-radius: 0.5rem;
          z-index: -1;
          width: calc(100% - 1px);
          height: calc(100% - 1px);
          backdrop-filter: blur(3px);
        }
      }
    }

    div.description {
      margin-top: 0.5rem;
      padding: 0.5rem;

      > h1 {
        font-size: 1.5rem;
        margin: 0;
        color: rgba(255, 255, 255, 1);
        font-weight: 800;
      }

      > h4 {
        font-size: 0.8rem;
        margin: 0;
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
      }

      > span {
        color: rgba(255, 255, 255, 0.87);
        word-break: keep-all;
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

    a {
      display: block;
      padding: 0 0.5rem;

      :hover {
        color: rgba(0, 255, 255, 1);
      }
    }

    span {
      font-weight: 400;
    }
  }
`

export default CardWrapper
