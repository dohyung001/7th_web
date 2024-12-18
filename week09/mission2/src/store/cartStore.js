import { create } from 'zustand';
import cartItems from '../constants/cartItems.jsx';

const useCartStore = create((set) => ({
  items: [...cartItems], // 초기값
  countSum: 0,
  priceSum: 0,
  isOpen: false, // Modal 상태

  increase1: (id) => set((state) => ({

  })),

  // Actions
  increase: (id) => set((state) => ({
    items: state.items.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    ),
  })),

  decrease: (id) => set((state) => ({
    items: state.items.map((item) =>
      item.id === id && item.amount > 1
        ? { ...item, amount: item.amount - 1 }
        : item
    ).filter((item) => item.amount > 0),
  })),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),
  clearCart: () => set(() => ({
    items: [],
    countSum: 0,
    priceSum: 0,
  })),
  calculateTotals: () => set((state) => ({
    countSum: state.items.reduce((sum, item) => sum + item.amount, 0),
    priceSum: state.items.reduce((sum, item) => sum + item.amount * Number(item.price), 0),
  })),
  openModal: () => set(() => ({ isOpen: true })),
  closeModal: () => set(() => ({ isOpen: false })),
}));

export default useCartStore;
