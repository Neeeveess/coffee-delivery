import styled from 'styled-components'

export const HeroSectionContainer = styled.section`
  > div {
    display: flex;
    gap: 2rem;

    margin: 0 auto;
    width: 100%;
    max-width: 1120px;
    padding: 0 1.5rem;
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
      }
    }
    img {
      object-fit: contain;
      object-position: center;
    }
  }
`
