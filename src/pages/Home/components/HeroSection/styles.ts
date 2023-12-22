import styled from 'styled-components'

export const HeroSectionContainer = styled.section`
  > div {
    display: flex;
    gap: 2rem;

    margin: 0 auto;
    width: 100%;
    max-width: 1120px;
    padding: 9.2rem 1.5rem;

    @media (max-width: 968px) {
      flex-wrap: wrap-reverse;
      text-align: center;
      justify-content: center;
    }
    > div {
      h1 {
        font-family: 'Baloo 2', 'Roboto', sans-serif;
        font-size: 4.8rem;
        font-weight: 800;
        line-height: 1.3;
        margin-bottom: 1.6rem;
      }
      h2 {
        color: ${(props) => props.theme['gray-800']};
        font-size: 2rem;
        line-height: 1.3;
        font-weight: 400;
        margin-bottom: 6.6rem;
      }
      ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem 4rem;
        li {
          p {
            display: flex;
            align-items: center;
            gap: 1.2rem;

            line-height: 1.3;
            color: ${(props) => props.theme['gray-700']};
            span {
              padding: 0.8rem;
              border-radius: 50%;
              line-height: 0;
              background: ${(props) => props.theme['yellow-700']};
              svg {
                color: ${(props) => props.theme.white};
              }
            }
          }
          &:nth-child(2) {
            span {
              background: ${(props) => props.theme['gray-700']};
            }
          }
          &:nth-child(3) {
            span {
              background: ${(props) => props.theme['yellow-400']};
            }
          }
          &:nth-child(4) {
            span {
              background: ${(props) => props.theme['purple-400']};
            }
          }
        }
      }
    }
    img {
      object-fit: contain;
      object-position: center;
      width: 100%;
      max-width: 476px;
    }
  }
`
