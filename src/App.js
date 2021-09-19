import * as React from "react"
import NavBar from './componentes/NavBar/NavBar.jsx';
import Header from "./componentes/Header/Header.jsx";
import CardContainer from './Containers/CardContainer/CardContainer.jsx';
import ItemDetailContainer from '../src/componentes/ItemDetail/ItemDetail'

function App() {
  return (
    <div className="App.css">
      <NavBar />
      <Header />
      <CardContainer />
      <ItemDetailContainer /> 
    </div>   
  );
}

export default App;
