import { useContext, useState } from 'react';
import Button from '../UI/Button';
import PlusIcon from '../../assets/icons/plus.svg?react';
import styled from 'styled-components';
import { BasketContext } from '../store/BasketContext';

const MealItemForm = ({ id, title, price }) => {
  const { addOrder } = useContext(BasketContext);
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newOrder = {
      amount: +amount,
      id: id,
      title,
      price,
    };
    addOrder(newOrder);
  };
  return (
    <AddAmount onSubmit={submitHandler}>
      <div>
        <AmountLabel htmlFor={id}>Amount</AmountLabel>
        <AmountsInput
          value={amount}
          onChange={amountChangeHandler}
          type="number"
          min={'1'}
          max={'5'}
          id={id}
          defaultValue={1}
        />
      </div>

      <Button>
        <StyledIcon /> ADD
      </Button>
    </AddAmount>
  );
};

export default MealItemForm;

const AddAmount = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`;
const AmountLabel = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin-right: 20px;
`;
const AmountsInput = styled.input`
  width: 60px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #d6d6d6d6 !important;
  outline: none;
  padding: 4px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin-bottom: 12px;
`;
