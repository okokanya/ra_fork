import React, { Component } from 'react';
import script from './js/script.js';
import slider from './js/slider.js';


const Footer = () => (

<footer class="footer">
<section class="subscribe">
  <div class="subscribe__wrapper">
    <h2 class="subscribe__title">подписаться на рассылку выгодных предложений</h2>
    <form class="subscribe__radios" action="">
      <label class="subscribe__radio_label">
        <input class="subscribe__radio" type="radio" name="subscribe" value="women" />
        <div class="subscribe__radio_text">Женское</div>
      </label>
      <label class="subscribe__radio_label">
        <input class="subscribe__radio" type="radio" name="subscribe" value="men" />
        <div class="subscribe__radio_text">Мужское</div>
      </label>
      <label class="subscribe__radio_label">
        <input class="subscribe__radio" type="radio" name="subscribe" value="both" checked="" />
        <div class="subscribe__radio_text">Всё</div>
      </label>
      <input class="subscribe__email" type="email" placeholder="Ваш e-mail" />
      <input class="subscribe__submit" type="submit" value="ПОДПИСАТЬСЯ" />
    </form>
  </div>
</section>
<div class="footer__bottom">
  <div class="wrapper">
    <div class="footer__menus">
      <div class="footer__menu footer__menu_about">О магазине
        <ul>
          <li><a href="#">BosaNoga</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Пресса</a></li>
        </ul>
      </div>
      <div class="footer__menu footer__menu_collection">Коллекции
        <ul>
          <li><a href="#">Обувь</a></li>
          <li><a href="#">Аксессуары</a></li>
          <li><a href="#">Для дома</a></li>
        </ul>
      </div>
      <div class="footer__menu footer__menu_help">Помощь
        <ul>
          <li><a href="#">Как купить?</a></li>
          <li><a href="#">Возврат</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__info">
      <h3 class="footer__info_title">Принимаем к оплате:</h3>
      <div class="footer__paid-systems">
        <div class="footer__paid footer__paid_paypal"></div>
        <div class="footer__paid footer__paid_master-card"></div>
        <div class="footer__paid footer__paid_visa"></div>
        <div class="footer__paid footer__paid_yandex"></div>
        <div class="footer__paid footer__paid_webmoney"></div>
        <div class="footer__paid footer__paid_qiwi"></div>
      </div>
      <div class="footer__social-links">
        <h3 class="footer__social-links_title">Мы в соц.сетях:</h3>
        <div class="footer__social-link footer__social-link_twitter"></div>
        <div class="footer__social-link footer__social-link_vk"></div>
      </div>
      <div class="footer__copyright">2009-2018 © BosaNoga.ru — модный интернет-магазин обуви<br /> и аксессуаров. Все права защищены. Доставка по всей России!</div>
    </div>
    <div class="footer__contacts"><a class="footer__phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
      <p class="footer__phone_text">Ежедневно: с 09-00 до 21-00</p><a class="footer__email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
    </div>
  </div>
</div>
</footer>
)
export default Footer;