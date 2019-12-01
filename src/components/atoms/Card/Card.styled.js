import styled from 'styled-components'

import no_img from '../../../static/images/bg_img/no_img.png'

const CardWrapper = styled.div`
  background-color: rgb(53, 53, 53);
  max-width: ${({ mobile }) => (mobile ? '20rem' : '40rem')};
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  margin: 1rem;

  > div {
    position: relative;
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;

    :first-child {
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
        margin-top: 1rem;
        padding: 0 0.5rem;

        > h1 {
          font-size: 1.5rem;
          margin: 0;
          color: #fff;
          font-weight: 800;
          text-transform: uppercase;
        }

        > span {
          color: rgba(255, 255, 255, 0.87);
        }
      }
    }

    :last-child {
      padding: 0.5rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > span {
        color: rgba(255, 255, 255, 1);
        font-weight: 800;
      }
    }
  }
`

export default CardWrapper
