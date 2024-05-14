import styled from 'styled-components';
import Modal from '../UI/Modal';
import BasketItem from './BasketItem';
import TotalAmount from './TotalAmount';
import Button from '../UI/Button';
import { useContext } from 'react';
import { BasketContext } from '../store/BasketContext';

const Basket = ({ onClose }) => {
  const { items } = useContext(BasketContext);

  function calculateTotalAmount() {
    const result = items.reduce((acc, { amount, price }) => {
      return acc + amount * price;
    }, 0);
    return result.toFixed(2);
  }
  return (
    <Modal onClose={onClose}>
      <MealContainer>
        {items && items.length > 0
          ? items.map((item) => <BasketItem key={item.id} {...item} />)
          : null}
      </MealContainer>
      <TotalAmount totalAmount={calculateTotalAmount()} />
      <ButtonsContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        <Button variant="contained">Order</Button>
      </ButtonsContainer>
    </Modal>
  );
};

export default Basket;

const MealContainer = styled('div')`
  max-height: 250px;
  overflow: hidden;
  overflow-y: auto;
`;

const ButtonsContainer = styled('div')`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;
