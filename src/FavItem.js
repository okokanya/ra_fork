import React, { Component } from "react";
import products from "./data/products.json";

class FavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch({products})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error {error.message} </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <a className="item-list__item-card item" href="product-card-desktop.html">
          <div className="item-pic">
            <img
              className="item-pic-2"
              src="img/catalogue-pics/product-catalogue__item-2.png"
              alt=""
            />
            <div className="product-catalogue__product_favorite">
              <p />
            </div>
            <div className="arrow arrow_left" />
            <div className="arrow arrow_right" />
          </div>
          <div className="item-desc">
            <h4 className="item-name">Ботинки женские</h4>
            <p className="item-producer">
              Производитель: <span className="producer">Norma J.Baker</span>
            </p>
            <p className="item-price">23 150</p>
            <div className="sizes">
              <p className="sizes__title">Размеры в наличии:</p>
              <p className="sizes__avalible">36, 37, 38, 39, 40, 41, 42</p>
            </div>
          </div>
        </a>
      );
    }
  }
}

export default FavItem;
