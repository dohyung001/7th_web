import React, { useEffect } from 'react';
import useCartStore from '../store/cartStore';
import { MusicListContainer, MusicListHeader, PriceContainer, CustomDiv, CustomHr, ClearButton, CustomBox } from './styledComponents';
import Music from './Music';
import CustomModal from './CustomModal';
import MoonLoader from 'react-spinners/MoonLoader';

export default function MusicList() {
  const { items, priceSum, calculateTotals, openModal, isLoading } = useCartStore();

  useEffect(() => {
    calculateTotals();
  }, [items]);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <MoonLoader color={"green"} loading={true} size={100} />
      </div>
    );
  }

  return (
    <CustomDiv>
      <MusicListContainer>
        <MusicListHeader>당신이 선택한 음반</MusicListHeader>
        {items.length > 0 ? (
          <>
            {items.map((e) => (
              <Music key={e.id} id={e.id} />
            ))}
            <CustomHr />
            <PriceContainer>
              <div>총 가격</div>
              <CustomBox />
              <div>₩ {priceSum}</div>
            </PriceContainer>
            <ClearButton onClick={openModal}>장바구니 초기화</ClearButton>
          </>
        ) : (
          <div>고객님이 좋아하는 음반을 담아보세요~!</div>
        )}
      </MusicListContainer>
      <CustomModal />
    </CustomDiv>
  );
}
