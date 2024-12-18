import { BarContainer, BarCartIcon, BarHead, MusicCount } from './styledComponents'
import { CartIcon } from '../constants/icons'
import { useSelector } from 'react-redux'

export default function HeadBar() {
  const cart = useSelector(state => state.cart);

  return (
    <BarContainer>
      <BarHead>UMC PlayList </BarHead>
      <BarCartIcon> <CartIcon /><MusicCount>{cart.countSum}</MusicCount></BarCartIcon>

    </BarContainer>
  )
}