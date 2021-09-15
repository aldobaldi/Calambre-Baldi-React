import * as React from "react"
import NavBar from './componentes/NavBar/NavBar.jsx';
import Header from "./componentes/Header/Header.jsx";
import CardContainer from './Containers/CardContainer.jsx';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Header />
       <CardContainer />
    </div>
  );
}

export default App;
