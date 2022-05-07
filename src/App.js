import React from "react";
import Navbar from './componentes/Navbar.js'
import Card from './componentes/Card.js'

import data from './data.js';

const App = () => {
  const cardElements = data.map(item => {
    return <Card
      key={item.id}
      {...item}
    />
  })
  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
        <div className="cards-container">
          {cardElements}
        </div>
      </div>
    </div>
  )
}

export default App;