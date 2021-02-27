import React from 'react'

function Youbin(props) {
  return (
      <div>
          <h3>I like { props.fav }. 정도는 {props.degree}</h3>
      </div>
  )
}


function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Youbin fav="kickek" degree="so much"/>
      <Youbin fav="ramen" degree="medium"/>
    </div>
  );
}

export default App;
