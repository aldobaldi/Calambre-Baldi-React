import * as React from "react"
import NavBar from './componentes/NavBar/NavBar.jsx';
import Header from "./componentes/Header/Header.jsx";
import ItemDetailContainer from '../src/Containers/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../src/Containers/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App.css">
      <NavBar />
      <Header />
      {/* <CardContainer /> */}
      <ItemDetailContainer /> 
      <ItemListContainer />
    </div>   
  );
}

export default App;
