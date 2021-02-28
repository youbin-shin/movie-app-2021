import React from 'react'

function Youbin({name, degree}) {
  return (
      <div>
          <h3>I like { name }. degree: { degree }</h3>
      </div>
  )
}

const foods = [
  {
    id: 1, 
    name: "a",
    degree: "1"
  },
  {
    id: 2,
    name: "b", 
    degree: "2"
  },
  {
    id: 3, 
    name: "c",
    degree: "3"
  },
  {
    id: 4,
    name: "d",
    degree: "4"
  }
]


function App() {
  return (
    <div>
      {foods.map((food) => <Youbin key={food.id} name={food.name} degree={food.degree}/> )}
    </div>
  );
}

export default App;
