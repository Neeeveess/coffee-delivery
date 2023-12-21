import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme['gray-100']};
  padding: 3.2rem 0;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
`

export const NavBar = styled.nav`
  display: flex;
  gap: 1.2rem;

  span {
    background: ${(props) => props.theme['purple-100']};
    color: ${(props) => props.theme['purple-700']};
    padding: 0.8rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    svg {
      color: ${(props) => props.theme['purple-400']};
    }
  }
`
export const CartButton = styled.button`
  border: 0;
  line-height: 0;
  cursor: pointer;

  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-700']};
  padding: 0.8rem;
  border-radius: 6px;
`
