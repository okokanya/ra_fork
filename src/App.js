import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// const { HashRouter, Switch, Route, Link } = ReactRouterDOM;
import logo from "./logo.svg";
import "./App.css";
import style from "./css/style.css";
import Header from "./Header";
import Footer from "./Footer";
import ProductCardDesktop from "./ProductCardDesktop";
import Order from "./Order";
import OrderDone from "./OrderDone";
import MainPage from "./MainPage";
import Catalogue from "./Catalogue";
import Favorite from "./Favorite";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/favorite" component={Favorite} />
            <Route path="/order" component={Order} />
            <Route path="/orderdone" component={OrderDone} />

            <Route path="/catalogue" component={Catalogue} />
            <Route path="/product" component={ProductCardDesktop} />
            <Route exact path="/" component={MainPage} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
