import { CartButton, HeaderContainer, HeaderContent, NavBar } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/images/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="Logo Coffee Delivery " />
        <NavBar>
          <span>
            <MapPin size={22} weight="fill" />
            Porto Alegre
          </span>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </NavBar>
      </HeaderContent>
    </HeaderContainer>
  )
}
