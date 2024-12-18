import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/modalSlice';
import { clearCart } from '../redux/cartSlice';
import { ModalContainer, ModalContent, ModalButton, CloseModalButton } from './styledComponents';

const CustomModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.isOpen);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(closeModal());
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