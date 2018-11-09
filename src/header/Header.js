import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import MainProfile from "./MainProfile";
import Main from "./Main";
import Categories from "./Categories";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelOpen: false,
      isLkOpened: false,
      isBasketOpened: false,
      isSearchActive: false
    };
  }

  handleMainCategories = () => {
    this.setState({ isPanelOpen: !this.state.isPanelOpen });
    console.log(this.state.isPanelOpen);
  };

  handleClickLK = () => {
    this.setState({ isLkOpened: !this.state.isLkOpened });
    this.setState({ isBasketOpened: false });
  };

  handleClickBasket = () => {
    this.setState({ isBasketOpened: !this.state.isBasketOpened });
    this.setState({ isLkOpened: false });
  };

  handleClickSearch = () => {
    this.setState({ isSearchActive: !this.state.isSearchActive });
    console.log(this.state.isSearchActive);
  }

  render() {
    return (
      <header className="header">
        <div className="top-menu">
          <div className="wrapper">
            <ul className="top-menu__items">
              <li className="top-menu__item">
                <a href="#">Возврат</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Доставка и оплата</a>
              </li>
              <li className="top-menu__item">
                <a href="#">О магазине</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Контакты</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Новости</a>
              </li>
            </ul>
          </div>
        </div>

        <Main
          isLkOpened={this.state.isLkOpened}
          isBasketOpened={this.state.isBasketOpened}
          funcLK={this.handleClickLK}
          funcBasket={this.handleClickBasket}
          handleClickSearch={this.handleClickSearch}
          isSearchActive={this.state.isSearchActive}
        />
        <MainProfile
          isBasketOpened={this.state.isBasketOpened}
          isLkOpened={this.state.isLkOpened}
        />
        <nav className="main-menu">
          <div className="wrapper">
          <BrowserRouter>

            <ul className="main-menu__items">
              <li
                className="main-menu__item main-menu__item_sales"
                onClick={this.handleMainCategories}
              >
                <a href="#">Акции</a>
              </li>
              <li
                className="main-menu__item main-menu__item_women"
                onClick={this.handleMainCategories}
              >
                <Link to="./catalogue">Женская обувь</Link>
              </li>
              <li
                className="main-menu__item main-menu__item_men"
                onClick={this.handleMainCategories}
              >
                <Link to="./catalogue">Мужская обувь</Link>
              </li>
              <li
                className="main-menu__item main-menu__item_kids"
                onClick={this.handleMainCategories}
              >
                <Link to="./catalogue">Детская обувь</Link>
              </li>
              <li
                className="main-menu__item main-menu__item_accessories"
                onClick={this.handleMainCategories}
              >
                <a href="#">Аксессуары</a>
              </li>
              <li
                className="main-menu__item main-menu__item_home"
                onClick={this.handleMainCategories}
              >
                <a href="#">Для дома</a>
              </li>
              <li
                className="main-menu__item main-menu__item_brands"
                onClick={this.handleMainCategories}
              >
                <a href="#">Бренды</a>
              </li>
              <li
                className="main-menu__item main-menu__item_new"
                onClick={this.handleMainCategories}
              >
                <a href="#">Новинки</a>
              </li>
            </ul>
            </BrowserRouter>

          </div>
        </nav>
        <Categories isPanelOpen={this.state.isPanelOpen} />
      </header>
    );
  }
}

export default Header;
