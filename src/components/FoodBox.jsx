import { Card, Col, Button } from 'antd';

// Iteration 2
//* function FoodBox({food: {name, image, calories, servings}}) HACIENDO ASÍ PODRÍA DESESTRUCTURAR Y AHORRAR ESCRITURA
function FoodBox(props, setFoods, index) {

  const handleDelete = () => {
    setFoods((foods) => {
      const clone = [...setFoods]
      clone.splice(index, 1)
      return clone
    })
  }

  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b>{' '}
          kcal
        </p>
        <Button type="primary" onClick={handleDelete}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
