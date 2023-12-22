import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HeroSectionContainer } from './styles'

import imgCoffe from '../../../../assets/images/img-coffe.png'

export function HeroSection() {
  return (
    <HeroSectionContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <ul>
            <li>
              <p>
                <span>
                  <ShoppingCart weight="fill" size={16} />
                </span>
                Compra simples e segura
              </p>
            </li>
            <li>
              <p>
                <span>
                  <Package weight="fill" size={16} />
                </span>
                Compra simples e segura
              </p>
            </li>
            <li>
              <p>
                <span>
                  <Timer weight="fill" size={16} />
                </span>
                Compra simples e segura
              </p>
            </li>
            <li>
              <p>
                <span>
                  <Coffee weight="fill" size={16} />
                </span>
                Compra simples e segura
              </p>
            </li>
          </ul>
        </div>
        <img src={imgCoffe} alt="" />
      </div>
    </HeroSectionContainer>
  )
}
