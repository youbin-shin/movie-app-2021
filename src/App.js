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
    name: "a",
    degree: "1"
  },
  {
    name: "b", 
    degree: "2"
  },
  {
    name: "c",
    degree: "3"
  },
  {
    name: "d",
    degree: "4"
  }
]

function App() {
  return (
    <div>
      {foods.map(food => <Youbin name={food.name} degree={food.degree}/>)}
    </div>
  );
}

export default App;
