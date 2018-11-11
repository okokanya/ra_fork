import React, { Component } from 'react';

class CatalogueFilters extends Component {
render() {
return (
    <section className="sidebar">
      <section className="sidebar__division">
        <div className="sidebar__catalogue-list">
          <div className="sidebar__division-title">
            <h3>Каталог</h3><div className="opener-down"></div>
          </div>
          <ul>
            <li><a href="#">Балетки</a></li>
            <li><a href="#">Босоножки и сандалии</a></li>
            <li><a href="#">Ботильоны</a></li>
            <li><a href="#">Ботинки</a></li>
            <li><a href="#">Ботфорты</a></li>
            <li><a href="#">Галоши</a></li>
            <li><a href="#">Тапочки</a></li>
            <li><a href="#">Туфли</a></li>
            <li><a href="#">Сапоги</a></li>
          </ul>
        </div>
      </section>
      <div className="separator-150 separator-150-1"></div>
      <section className="sidebar__division">
          <div className="sidebar__price">
            <div className="sidebar__division-title">
              <h3>Цена</h3><div className="opener-down"></div>
            </div>
            <div className="price-slider">
              <div className="circle-container">
                <div className="circle-1"></div>
                <div className="line-white"></div>
                <div className="line-colored"></div>
                <div className="circle-2"></div>
              </div>
              <div className="counter">
                <input type="text" className="input-1" value="1000" />
                <div className="input-separator"></div>
                <input type="text" className="input-2" value="30 000" />
              </div>
            </div>
          </div>
      </section>
      <div className="separator-150 separator-150-2"></div>
      <section className="sidebar__division">
        <div className="sidebar__color">
          <div className="sidebar__division-title">
            <h3>Цвет</h3><div className="opener-down"></div>
          </div>
          <ul>
            <li><a href="#"><div className="color beige"></div><span className="color-name">Бежевый</span></a></li>
            <li><a href="#"><div class="color whitesnake"></div><span class="color-name">Белый</span></a></li>
            <li><a href="#"><div class="color shocking-blue"></div><span class="color-name">Голубой</span></a></li>
            <li><a href="#"><div class="color yellow"></div><span class="color-name">Жёлтый</span></a></li>
            <li><a href="#"><div class="color king-crimson"></div><span class="color-name">Алый</span></a></li>
            <li><a href="#"><div class="color deep-purple"></div><span class="color-name">Фиолетовый</span></a></li>
            <li><a href="#"><div class="color black-sabbath"></div><span class="color-name">Чёрный</span></a></li>
          </ul>
        </div>
      </section>
      <div class="separator-150 separator-150-3"></div>         
      <section class="sidebar__division">
        <div class="sidebar__size">
          <div class="sidebar__division-title">
            <h3>Размер</h3><div class="opener-down"></div>
          </div>
          <ul>
            <div class="list-1">
              <li><label><input type="checkbox" class="checkbox" name="checkbox-31" /><span class="checkbox-custom"></span> <span class="label">31</span></label></li>
              <li><label><input type="checkbox" class="checkbox" name="checkbox-33" /><span class="checkbox-custom"></span> <span class="label">33</span></label></li>
              <li><label><input type="checkbox" class="checkbox" name="checkbox-35" /><span class="checkbox-custom"></span> <span class="label">35</span></label></li>
              <li><label><input type="checkbox" class="checkbox" name="checkbox-37" /><span class="checkbox-custom"></span> <span class="label">37</span></label></li>
              <li><label><input type="checkbox" class="checkbox" name="checkbox-39" /><span class="checkbox-custom"></span> <span class="label">39</span></label></li>
            </div>
            <div class="list-2">
              <li><label><input type="checkbox" class="checkbox" name="checkbox-32" /><span class="checkbox-custom"></span> <span class="label">32</span></label></li>
              <li><label><input type="checkbox" class="checkbox" name="checkbox-34" /><span class="checkbox-custom"></span> <span class="label">34</span></label></li>
              <li><label><input type="checkbox" class="checkbox" name="checkbox-36" checked /><span class="checkbox-custom"></span> <span class="label">36</span></label></li>
              <li><label><input type="checkbox" class="checkbox" name="checkbox-38" /><span class="checkbox-custom"></span> <span class="label">38</span></label></li>
              <li><label><input type="checkbox" class="checkbox" name="checkbox-40" /><span class="checkbox-custom"></span> <span class="label">40</span></label></li> 
            </div>
          </ul>
        </div>
      </section>
      <div class="separator-150 separator-150-4"></div>         
      <section class="sidebar__division">    
        <div class="sidebar__heel-height">
          <div class="sidebar__division-title">
            <h3>Размер каблука</h3><div class="opener-up"></div>
          </div>
        </div>
      </section>
      <div class="separator-150 separator-150-5"></div>            
      <section class="sidebar__division">  
        <div class="sidebar__occasion">
          <div class="sidebar__division-title">
            <h3>Повод</h3><div class="opener-down"></div>
          </div>
          <ul>
            <li><a href="#">Офис</a></li>
            <li><a href="#">Вечеринка</a></li>
            <li><a href="#">Свадьба</a></li>
            <li><a href="#">Спорт</a></li>
            <li><a href="#">Путешествие</a></li>
            <li><a href="#">Свидание</a></li>
            <li><a href="#">Дома</a></li>
            <li><a href="#">Произвести впечатление</a></li>
          </ul>
        </div>
      </section>
      <div class="separator-150 separator-150-6"></div>       
      <section class="sidebar__division">
        <div class="sidebar__season">
          <div class="sidebar__division-title">
            <h3>Сезон</h3><div class="opener-up"></div>
          </div>
        </div>
      </section>
      <div class="separator-150 separator-150-7"></div>            
      <section class="sidebar__division">
          <div class="sidebar__brand">
            <h3>Бренд</h3>
            <form action="post" class="brand-search">
              <input type="search" class="brand-search" id="brand-search" placeholder="Поиск" />
              <input type="submit" name="" value="" class="submit" />
            </form>
          </div>

            <label><input type="checkbox" class="checkbox" name="checkbox-disc" /><span class="checkbox-discount"></span> <span class="text-discount">Со скидкой</span></label>

        <div class="separator-240"></div>
      </section>
          
      <section class="sidebar__division">    
        <div class="drop-down">
          <a href="#"><span class="drop-down-icon"></span>Сбросить</a>
        </div>
      </section>
    </section>
    )
  }
};
export default CatalogueFilters;
