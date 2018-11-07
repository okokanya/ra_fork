import React, { Component } from "react";
import Featured from "./Featured.js";
import slider from "./img/slider.jpg";
import slider180deg from "./img/slider180deg.jpeg";

class MainPage extends Component {

  // getSlider = (f, img, button, V, Vo, arrows) => {
  //   console.log(f);
  //   var iii = 0,
  //     start = null,
  //     clear = 0;

  //   function step(time) {
  //     if (start === null) start = time;
  //     var progress = time - start;
  //     if (progress > V) {
  //       start = null;
  //       for (var i = 0; i < img.length; i++) {
  //         img[i].style.zIndex = "0";
  //         button[i].style.opacity = "0.5";
  //       }
  //       img[iii].style.zIndex = "1";
  //       iii = iii != img.length - 1 ? iii + 1 : 0;
  //       img[iii].style.zIndex = "2";
  //       img[iii].style.opacity = "0";
  //       button[iii].style.opacity = "1";
  //     } else if (img[iii].style.opacity != "") {
  //       img[iii].style.opacity = progress / Vo < 1 ? progress / Vo : 1;
  //     }
  //     if (clear != "0" && progress > Vo) {
  //     } else {
  //       requestAnimationFrame(step);
  //     }
  //   }
  //   requestAnimationFrame(step);
  //   f.onMouseEnter = function() {
  //     if (clear == "0") clear = "1";
  //   }; // при наведении на слайдер
  //   f.onmouseleave = function() {
  //     if (clear == "1") {
  //       clear = "0";
  //       requestAnimationFrame(step);
  //     }
  //   }; // курсор убран со слайдера
  //   for (var j = 0; j < button.length; j++) {
  //     // при нажатии кнопок
  //     button[j].onclick = function() {
  //       for (var i = 0; i < img.length; i++) {
  //         img[i].style.zIndex = "0";
  //         button[i].style.opacity = "0.5";
  //       }
  //       iii = +this.value;
  //       img[this.value].style.zIndex = "2";
  //       button[this.value].style.opacity = "1";
  //     };
  //     arrows[0].onclick = function() {
  //       img[iii].style.zIndex = "0";
  //       button[iii].style.opacity = "0.5";
  //       iii--;
  //       iii = iii < 0 ? img.length - 1 : iii;
  //       img[iii].style.zIndex = "2";
  //       button[iii].style.opacity = "1";
  //     };
  //     arrows[1].onclick = function() {
  //       img[iii].style.zIndex = "0";
  //       button[iii].style.opacity = "0.5";
  //       iii++;
  //       iii = iii === img.length ? 0 : iii;
  //       img[iii].style.zIndex = "2";
  //       button[iii].style.opacity = "1";
  //     };
  //   }
  // };

  render() {
    return (
      <div>
        <div class="preloader_wrapper hidden">
          <div class="preloader">
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
        </div>
        <div className="container">
          <section className="slider">
            <div className="wrapper">
              <div
                className="slider__pictures"
                ref={div => this.sliderPictures = div}
              >
                <a className="slider__image" href="#">
                  <img src={slider} alt="slide picture"
                  ref={div => (this.sliderImage = div)} />
                </a>
                <a className="slider__image" href="#">
                  <img src={slider180deg} alt="slide picture" 
                  ref={div => (this.sliderImage = div)} />
                </a>
                <a className="slider__image" href="#">
                  <img src={slider} alt="slide picture" 
                  ref={div => (this.sliderImage = div)} />
                </a>
                <a className="slider__image" href="#">
                  <img src={slider180deg} alt="slide picture" 
                  ref={div => (this.sliderImage = div)} />
                </a>
                <div
                  className="arrow slider__arrow slider__arrow_left" 
                  // ref={div => (this.sliderArrow = div)}
                  // onClick={this.getSlider(
                  //   this.sliderPictures,
                  //   this.sliderImage,
                  //   this.sliderButton,
                  //   "4000",
                  //   "1000",
                  //   this.sliderArrow
                  // )}
                />
                <div
                  className="arrow slider__arrow slider__arrow_right"
                  // ref={div => (this.sliderArrow = div)}
                  // onClick={this.getSlider(
                  //   this.sliderPictures,
                  //   this.sliderImage,
                  //   this.sliderButton,
                  //   "4000",
                  //   "1000",
                  //   this.sliderArrow
                  // )}
                />
                <div className="slider__circles">
                  <button className="slider__circle" value="0" 
                  // ref={div => (this.sliderButton = div)} 
                  />
                  <button className="slider__circle" value="1" />
                  <button className="slider__circle" value="2" />
                  <button className="slider__circle" value="3" />
                </div>
                <h2 className="h2">К весне готовы!</h2>
              </div>
            </div>
          </section>

          <Featured />

          {/* <section className="new-deals wave-bottom">
            <h2 className="h2">Новинки</h2>
            <div className="new-deals__menu">
              <ul className="new-deals__menu-items">
                <li className="new-deals__menu-item new-deals__menu-item_active">
                  <a href="#">Женская обувь</a>
                </li>
                <li className="new-deals__menu-item">
                  <a href="#">Мужская обувь</a>
                </li>
                <li className="new-deals__menu-item">
                  <a href="#">Детская обувь</a>
                </li>
                <li className="new-deals__menu-item">
                  <a href="#">аксессуары</a>
                </li>
                <li className="new-deals__menu-item">
                  <a href="#">для дома</a>
                </li>
              </ul>
            </div>
            <div className="new-deals__slider">
              <div className="new-deals__arrow new-deals__arrow_left arrow" />
              <div className="new-deals__product new-deals__product_first">
                <a href="#" />
              </div>

              <div className="new-deals__product new-deals__product_active">
                <a href="catalogue.html" />
                <div className="new-deals__product_favorite" />
              </div>
              <div className="new-deals__product new-deals__product_last">
                <a href="#" />
              </div>
              <div className="new-deals__arrow new-deals__arrow_right arrow" />
            </div>
            <div className="new-deals__product-info">
              <a href="product-card-desktop.html" className="h3">
                Босоножки женские
              </a>
              <p>
                Производитель:
                <span>Damlax</span>
              </p>
              <h3 className="h3">5 950 ₽</h3>
            </div>
          </section> */}

          <section className="sales-and-news wave-bottom">
            <h2 className="h2">акции и новости</h2>
            <div className="sales-and-news__items">
              <div className="sales-and-news__item sales-and-news__item_1">
                <a href="#">
                  <h3 className="h3">обувь к свадьбе</h3>
                </a>
              </div>
              <div className="sales-and-news__item sales-and-news__item_2">
                <a href="#">
                  <h3 className="h3">
                    20% скидка
                    <br />
                    <span>На летнюю обувь</span>
                  </h3>
                </a>
              </div>
              <div className="sales-and-news__item sales-and-news__item_3">
                <a href="#">
                  <h3 className="h3">готовимся к лету!</h3>
                </a>
              </div>
              <div className="sales-and-news__item sales-and-news__item_4">
                <a href="#">
                  <h3 className="h3">
                    Больше покупок –<br />
                    больше скидка!
                  </h3>
                </a>
              </div>
              <div className="sales-and-news__news">
                <div className="sales-and-news__arrow sales-and-news__arrow_up arrow" />
                <div className="sales-and-news__new">
                  <time datetime="2017-01-18 00:00">18 января 2017</time>
                  <a href="#">
                    Американские резиновые сапоги Bogs идеально подходят для
                    русской зимы!
                  </a>
                </div>
                <div className="sales-and-news__new">
                  <time datetime="2017-05-18 00:00">18 мая 2017</time>
                  <a href="#">Магазины Bosa Noga</a>
                </div>
                <div className="sales-and-news__new">
                  <time datetime="2017-03-10 00:00">10 марта 2017</time>
                  <a href="#">
                    Тенденция весны 2018: розовый и фуксия. 10 пар обуви для
                    яркого образа
                  </a>
                </div>
                <div className="sales-and-news__arrow sales-and-news__arrow_down arrow" />
              </div>
            </div>
          </section>

          <section className="about-us">
            <h2 className="about-us__title">
              Клиенты делают заказ
              <br /> в интернет-магазине BosaNoga!
            </h2>
            <p className="about-us__text">
              В Интернете можно встретить немало магазинов, предлагающих
              аксессуары. Но именно к нам хочется возвращаться снова и снова.
            </p>
            <h3 className="about-us__text_header">
              Мы предлагаем вам особые условия:
            </h3>
            <ol className="about-us__text">
              <li>
                Индивидуальный подход специалиста. Когда поступает новая
                коллекция обуви весна-лето или же коллекция обуви осень-зима –
                покупателям бывает трудно сориентироваться во всем многообразии
                новинок. Наш менеджер по телефону поможет вам определиться с
                товарами, подходящими именно вам.
              </li>
              <li>
                Мы периодически проводим распродажи как женских и мужских, так и
                детских моделей. Вы будете приятно удивлены ценами на аксессуары
                в мага- зине BosaNoga.
              </li>
              <li>
                У нас всегда есть из чего выбрать. Неважно, какую категорию вы
                прос- матриваете: осень-зима, или же весна-лето – вы всегда
                сможете найти ва- рианты, подходящие вам по внешнему виду и
                цене.
              </li>
              <li>Мы несем ответственность за все товары.</li>
              <li>
                Молодые мамы будут рады обширному ассортименту детских моделей.
              </li>
            </ol>
            <p className="about-us__text">
              Если вы ищете место, где представлены обувные новинки от самых
              известных брендов, то вы зашли по верному адресу.
            </p>
            <p className="about-us__text">
              У нас представлены модели для мужчин, женщин, а также детские
              сапоги, босоножки, ботинки и туфли. Сделав заказ в нашем
              интернет-магазине, вы сможете быть модным и стильным как
              осенью-зимой, так и весной-летом. Просто наберите номер нашего
              телефона, и мы поможем вам определиться с покупкой.
            </p>
            <span className="about-us__text_overlay" />
            <button class="about-us__text_button">читать</button>
          </section>
        </div>
      </div>
    );
  }
}
export default MainPage;
