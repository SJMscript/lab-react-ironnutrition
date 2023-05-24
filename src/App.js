import { useState } from 'react';
import './App.css';
import allFoods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(allFoods);

  const añadirComida = (newComida) => {
    setFoods([...foods, newComida]);
  };

  const [filteredFoods, setFilteredFood] = useState([]);

  const searchFood = (search) => {
    let filteredArr = foods.filter((eachFood) => {
      if (eachFood.name.includes(search)) {
        return true; //agrega el elemento
      } else {
        return false; //no agregues el elemento
      }
    });

    setFilteredFood(filteredArr);
  };

  return (
    <div className="App">
      <AddFoodForm comiditaNueva={añadirComida} />
      <Search searchFood={searchFood} />

      {foods.map((eachFood, index) => (
        <div key={index}>
          <FoodBox food={eachFood} />
        </div>
      ))}
    </div>
  );
}

export default App;
