import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import style from "./css/style.css";
import Header from "./header/Header";
import Id13 from './catalogue/Id13';
import Id14 from './catalogue/Id14';
import Id15 from './catalogue/Id15';

import Footer from "./Footer";
import ProductCardDesktop from "./ProductCardDesktop";
import Order from "./Order";
import OrderDone from "./OrderDone";
import MainPage from "./MainPage";
import Catalogue from "./catalogue/Catalogue";
import Favorite from "./Favorite";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Header />
          
          <Switch>
            <Route path="/product/:id" component={ProductCardDesktop} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/order" component={Order} />
            <Route path="/orderdone" component={OrderDone} />
            <Route path="/catalogue/:category" component={Catalogue} />
            <Route path="/catalogue" exact component={Catalogue} />


            <Route path="/product" component={ProductCardDesktop} />
            <Route exact path="/" component={MainPage} />
          </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
