import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {

    const [nombreComida, setNombreComida] = useState("")
    const [nuevaImage, setNuevaImage] = useState("")
    const [nuevasCalorias, setNuevasCalorias] = useState(0)
    const [nuevasPorciones, setNuevasPorciones] = useState(0)

    const handleNombreComida = (event) => setNombreComida(event.target.value)

    const handleImagenComida = (event) => setNuevaImage(event.target.value)

    const handleCaloriasComida = (event) => setNuevasCalorias(event.target.value)

    const handlePorcionesComida = (event) => setNuevasPorciones(event.target.value)

    const handleFormSubmit = (event) => {
      event.preventDefault()  
      
      const newComida = {
            name: nombreComida,
            imagen: nuevaImage,
            calories: nuevasCalorias,
            servings: nuevasPorciones
        }
        props.comiditaNueva (newComida) 
    }

   

  return (
    <form onSubmit={handleFormSubmit}>
    <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input type="text" name="name" onChange={handleNombreComida} value={nombreComida} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input  type="text" name="image" onChange={handleImagenComida} value={nuevaImage}/>  {/* //todo lleva onChange???? */}

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input  type="number" name="calories" onChange={handleCaloriasComida} value={nuevasCalorias}/>

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input  type="number" name="servings" onChange={handlePorcionesComida} value={nuevasPorciones}/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
