import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, removeItem } from '../redux/cartSlice';
import { MusicContainer, AlbumCover, MusicText, MusicPrice, MusicReducer, CustomButton } from './styledComponents';
import { ChevronDown, ChevronUp } from '../constants/icons';

export default function Music({ id }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const item = cart.items.find(e => e.id === id);

  const handleIncrease = () => {
    dispatch(increase(id));
  };

  const handleDecrease = () => {
    if (item.amount > 1) {
      dispatch(decrease(id));
    } else {
      dispatch(removeItem(id));
    }
  };

  if (!item) {
    return null;
  }

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
