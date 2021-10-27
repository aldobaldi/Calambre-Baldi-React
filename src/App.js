import * as React from "react"
import { BrowserRouter,Route,Switch } from "react-router-dom";
import NavBar from './componentes/NavBar/NavBar.jsx';
import Footer from "./componentes/Footer/Footer.jsx";
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Cart from "./Pages/Cart/Cart";
import {CartProvaider} from "./Context/CartContext"
import {UserProvaider} from "./Context/UserContext"


function App() {
  return (
    <div className="App.css">

      <BrowserRouter>  
        <CartProvaider>
          <UserProvaider>
          <NavBar />
            <Switch> 
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/Producto/:id" component={ProductDetail}></Route>
              <Route exact path="/Cart" component={Cart}></Route>
              <Route exact path ="*" component={NotFound}></Route>
            </Switch>
          <Footer />
          </UserProvaider>
        </CartProvaider>
      </BrowserRouter>
    </div>   

  );
}

export default App;