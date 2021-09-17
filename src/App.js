import * as React from "react"
import NavBar from './componentes/NavBar/NavBar.jsx';
import Header from "./componentes/Header/Header.jsx";
import CardContainer from './Containers/CardContainer/CardContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer.jsx'

function App() {
  return (
    <div className="App">
       <NavBar />
       <Header />
       <CardContainer />
       <ItemDetailContainer />
    </div>
  );
}

export default App;
