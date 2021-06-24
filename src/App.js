import React from "react";
import Topbar from "./components/Topbar/";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import Hanger from "./components/Hanger";
import Home from "./components/Home";
import PLP from "./components/PLP";
import PDP from "./components/PDP";
import Contact from "./components/Contact"
import About from  "./components/About"
import Cart from "./components/Cart"
import { BrowserRouter,Route,Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/about"  component={About}/>
        <Route path="/cart"  component={Cart}/>
        <Route path="/products" exact component={PLP}/>
        <Route path ="/products/:id" component={PDP}/>
        <Route component={()=><h1>Error 404</h1>}/>
      </Switch>
      {/* <Products /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
