import React from 'react';
import useCartStore from '../store/cartStore';
import { MusicContainer, AlbumCover, MusicText, MusicPrice, MusicReducer, CustomButton } from './styledComponents';
import { ChevronDown, ChevronUp } from '../constants/icons';

export default function Music({ id }) {
  const { items, increase, decrease, removeItem } = useCartStore();
  const item = items.find((e) => e.id === id);

  const handleIncrease = () => increase(id);

  const handleDecrease = () => {
    if (item.amount > 1) {
      decrease(id);
    } else {
      removeItem(id);
    }
  };

  if (!item) return null;

  return (
    <MusicContainer>
      <AlbumCover src={item.img} />
      <MusicText>
        <div>{item.title} | {item.singer}</div>
        <MusicPrice>₩ {item.price}</MusicPrice>
      </MusicText>
      <MusicReducer>
        <CustomButton onClick={handleIncrease}>
          <ChevronUp />
        </CustomButton>
        {item.amount}
        <CustomButton onClick={handleDecrease}>
          <ChevronDown />
        </CustomButton>
      </MusicReducer>
    </MusicContainer>
  );
}
