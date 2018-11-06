import React, { Component } from "react";
import styleFavorite from "./css/styleFavorite.css";
import FavItem from "./FavItem";
import apiConfig from "./apiConfig.js";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(apiConfig.base + apiConfig.products)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(this.state);

    if (error) {
      return <div>Error {error.message} </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="wrapper wrapper_favorite">
          <div className="site-path">
            <ul className="site-path__items">
              <li className="site-path__item">
                <a href="index.html">Главная</a>
              </li>
              <li className="site-path__item">
                <a href="favorite.html">Избранное</a>
              </li>
            </ul>
          </div>
          <main className="product-catalogue product-catalogue_favorite">
            <section className="product-catalogue__head product-catalogue__head_favorite">
              <div className="product-catalogue__section-title">
                <h2 className="section-name">В вашем избранном</h2>
                <span className="amount amount_favorite">{this.state.items.length} товаров</span>
              </div>
              <div className="product-catalogue__sort-by">
                <p className="sort-by">Сортировать</p>
                <select id="sorting" name="">
                  <option value="">по дате добавления</option>
                  <option value="">по размеру</option>
                  <option value="">по производителю</option>
                </select>
              </div>
            </section>
            <section className="product-catalogue__item-list product-catalogue__item-list_favorite">
              {
                this.state.items.map((item) => <FavItem 
                title= {item.title} 
                pick= {item.images[0]}
                brand= {item.brand}
                price= {item.price} />
              )
            }
            </section>
            <div className="product-catalogue__pagination">
              <div className="page-nav-wrapper">
                <div className="angle-back">
                  <a href="#" />
                </div>
                <ul>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="">...</a>
                  </li>
                  <li>
                    <a href="#">99</a>
                  </li>
                </ul>
                <div className="angle-forward">
                  <a href="#" />
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }
  }
}

export default Favorite;
