import { BarContainer, BarCartIcon, BarHead, MusicCount } from './styledComponents';
import { CartIcon } from '../constants/icons';
import useCartStore from '../store/cartStore';

export default function HeadBar() {
  const countSum = useCartStore((state) => state.countSum); // Zustand에서 countSum 가져오기

  return (
    <BarContainer>
      <BarHead>UMC PlayList</BarHead>
      <BarCartIcon>
        <CartIcon />
        <MusicCount>{countSum}</MusicCount>
      </BarCartIcon>
    </BarContainer>
  );
}
