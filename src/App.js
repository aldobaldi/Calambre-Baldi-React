import * as React from "react"
import { BrowserRouter,Route,Switch } from "react-router-dom";
import NavBar from './componentes/NavBar/NavBar.jsx';
import Footer from "./componentes/Footer/Footer.jsx";
import ItemDetail from "./Pages/ItemDetail"
import Home from "./Pages/Home"
import Nosotros from "./Pages/Nosotros"
import NuestrasMarcas from "./Pages/NuestrasMarcas"
import NotFound from "./Pages/NotFound.jsx";

function App() {


  return (
    <div className="App.css">

      <BrowserRouter> 
        <NavBar />
          <Switch> 
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Nosotros" component={Nosotros}></Route>
            <Route exact path="/NuestrasMarcas" component={NuestrasMarcas}></Route>
            <Route exact path="/Producto/:id" component={ItemDetail}></Route>
            <Route exact path ="*" component={NotFound}></Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>   

  );
}

export default App;