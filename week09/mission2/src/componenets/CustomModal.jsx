import React from 'react';
import useCartStore from '../store/cartStore';
import { ModalContainer, ModalContent, ModalButton, CloseModalButton } from './styledComponents';

const CustomModal = () => {
  const { isOpen, closeModal, clearCart } = useCartStore();

  if (!isOpen) return null;

  const handleClose = () => closeModal();

  const handleClearCart = () => {
    clearCart();
    closeModal();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <p>당마두신 모든 음반을 삭제하시겠습니까?</p>
        <ModalButton onClick={handleClearCart}>네</ModalButton>
        <CloseModalButton onClick={handleClose}>아니요</CloseModalButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default CustomModal;
