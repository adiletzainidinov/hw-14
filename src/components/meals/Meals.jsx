import MealItems from "./MealItems";
import styled from "styled-components";

let meals = [
  {
    id: new Date().toISOString(),
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: new Date().toISOString(),
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: new Date().toISOString(),
    title: "Schnitzel",
    description: "A german specialty!",
    price: 12.99,
  },
  {
    id: new Date().toISOString(),
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

const Meals = () => {
  return (
    <Card>
      {meals.map((meal, index) => {
        return (
          <MealItems
            key={index}
            id={meal._id}
            title={meal.title}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
    </Card>
  );
};

export default Meals;

const Card = styled.ul`
  display: flex;
  flex-direction: column;
  width: 64rem;
  background: #ffffff;
  border-radius: 16px;
  margin: 80px auto;
  display: flex;
  padding: 40px 40px 36px 40px;
`;
