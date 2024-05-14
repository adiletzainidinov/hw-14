import { useState } from "react";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import styled from "styled-components";
import { BasketProvider } from "./components/store/BasketContext";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibleBasket = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <BasketProvider>
      <Header openModal={toggleVisibleBasket} />
      <Content>
        <Summary />
        <Meals />
      </Content>

      {isVisible && <Basket onClose={toggleVisibleBasket} />}
    </BasketProvider>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
