import React, {useEffect} from 'react';

import GoogleMap from '../google-map';

import './css/style.css';

const FourthTask = () => {
  
  const initSelect = () => {
    const select = document.querySelector('.footer-select');
    const selectValue = document.querySelector('.footer-select__value');
    const selectDropdown = document.querySelector('.footer-select__dropdown');

    selectDropdown.addEventListener('click', e => {
      const option = e.target.closest('.footer-select__option');
      if (option) {
        selectValue.textContent = option.textContent;
        e.target.closest('.footer-select').blur()
        select.dispatchEvent(new CustomEvent('change', { detail: option.textContent }))
      }
    })
  }
  
  useEffect(() => {
    initSelect()
  }, []);
  
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-buttons">
            <div className="header-button header-button__logo">
              <a href="/#">
                <img src="img/header/logo.svg" alt="Carguru"/>
              </a>
            </div>
            <div className="header-button header-button__menu"></div>
          </div>
        </div>
      </header>

      <section className="promo">
        <div className="container">

          <div className="promo-block">
            <h1 className="promo-block__title">
              <span>Ņem.</span>
              Brauc. Atstāj.<br/>
              Atkārto.
            </h1>

            <div className="promo-block__total">
              <div className="total-title">Brauciens no</div>
              <div className="total-price">
                <span className="total-price__number">0.24</span>
                <div className="total-price__units">
                  <span className="total-price__units-euro">€</span>
                  <span className="total-price__units-min">min.</span>
                </div>
              </div>
              <div className="total-subtitle">
                Lietošanas maksā ir iekļautas pilnīgi visas izmaksas. 
                <a href="/#">Sīkāk</a>
              </div>
              <div className="total-buttons">
                <a href="/#">
                  <div className="total-button button button-ios"/>
                </a>
                <a href="/#">
                  <div className="total-button button button-android"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="promo-cars">
          <div className="promo-car__before"></div>
          <div className="promo-car">
            <img src="./img/promo/car.png" alt=""/>
          </div>
          <div className="promo-car__after"></div>
          </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-block">
            <div className="features-item">
              <img src="./img/features/Bitmap_1.jpg" alt="Liela bezmaksas autostāvvieta pilsētā." className="features-item__img features-item__img-first"/>
              <div className="features-item__text">Liela bezmaksas autostāvvieta pilsētā.</div>
            </div>
            <div className="features-item">
              <img src="./img/features/Bitmap_2.jpg" alt="Benzīns ir iekļauts cenā." className="features-item__img features-item__img-second"/>
              <div className="features-item__text">Benzīns ir iekļauts cenā.</div>
            </div>
            <div className="features-item">
              <img src="./img/features/Bitmap_3.jpg" alt="90 jauni Toyota hibrīdauto." className="features-item__img features-item__img-third"/>
              <div className="features-item__text">90 jauni Toyota hibrīdauto.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider">
        <div className="container">
          <div className="slider-header">
            <div className="slider-header__item slider-header__item-active">
              <div className="slider-header__block">
                <div className="slider-header__title">Ņem.</div>
                <div className="slider-header__arrow"></div>
              </div>
              <div className="slider-header__subtitle">
                90 jauni hibrīda automobiļi izklāstīti pa visu pilsētu.
              </div>
            </div>
            <div className="slider-header__item">
              <div className="slider-header__block">
                <div className="slider-header__title">Brauc.</div>
                <div className="slider-header__arrow"></div>
              </div>
              <div className="slider-header__subtitle">
                Katrā nomā ir iekļauti 100 bezmaksas kilometri.
              </div>
            </div>
          </div>

          <div className="slider-main">
            <div className="slider-main__content">
              <div className="slider-main__title">
                Lai sāktu nomu, atrodiet vēlamo automašīnu kartē.
              </div>
              <div className="slider-main__buttons">
                <a href="/#">
                  <div className="slider-main__button button button-ios"/>
                </a>
                <a href="/#">
                  <div className="slider-main__button button button-android"/>
                </a>
              </div>
            </div>
            <div className="slider-main__phone">
              <img src="img/slider/search.jpg" alt="search"/>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cars">
        <div className="container">
          <div className="cars-block">

            <div className="cars-item">
              <div className="cars-item__text">
                <div className="cars-item__title">Toyota Rav4 Hybrid</div>
                <div className="cars-item__price">
                  <div className="cars-item__price-title">Brauciens no</div>

                  <span className="cars-item__price-number">0.32</span>
                  <div className="cars-item__price-units">
                    <span className="cars-item__price-units_euro">€</span>
                    <span className="cars-item__price-units_min">min.</span>
                  </div>
                </div>
              </div>
              <img src="./img/cars/1/ToyotaRav4Hybrid.png" alt="Toyota Rav4 Hybrid" className="cars-item__img"/>
            </div>

            <div className="cars-item">
              <div className="cars-item__text">
                <div className="cars-item__title">Toyota C-HR Hybrid</div>
                <div className="cars-item__price">
                  <div className="cars-item__price-title">Brauciens no</div>

                  <span className="cars-item__price-number">0.30</span>
                  <div className="cars-item__price-units">
                    <span className="cars-item__price-units_euro">€</span>
                    <span className="cars-item__price-units_min">min.</span>
                  </div>
                </div>
              </div>
              <img src="./img/cars/2/ToyotaC-HRHybrid.png" alt="Toyota C-HR Hybrid" className="cars-item__img"/>
            </div>
            
            <div className="cars-item">
              <div className="cars-item__text">
                <div className="cars-item__title">Toyota Corolla Hybrid</div>
                <div className="cars-item__price">
                  <div className="cars-item__price-title">Brauciens no</div>

                  <span className="cars-item__price-number">0.29</span>
                  <div className="cars-item__price-units">
                    <span className="cars-item__price-units_euro">€</span>
                    <span className="cars-item__price-units_min">min.</span>
                  </div>
                </div>
              </div>
              <img src="./img/cars/3/ToyotaCorollaHybrid.png" alt="Toyota Corolla Hybrid" className="cars-item__img"/>
            </div>

            <div className="cars-item">
              <div className="cars-item__text">
                <div className="cars-item__title">Toyota Auris Hybrid</div>
                <div className="cars-item__price">
                  <div className="cars-item__price-title">Brauciens no</div>

                  <span className="cars-item__price-number">0.27</span>
                  <div className="cars-item__price-units">
                    <span className="cars-item__price-units_euro">€</span>
                    <span className="cars-item__price-units_min">min.</span>
                  </div>
                </div>
              </div>
              <img src="./img/cars/4/ToyotaAurisHybrid.png" alt="Toyota Auris Hybrid" className="cars-item__img"/>
            </div>

            <div className="cars-item">
              <div className="cars-item__text">
                <div className="cars-item__title">Toyota Yaris Hybrid</div>
                <div className="cars-item__price">
                  <div className="cars-item__price-title">Brauciens no</div>

                  <span className="cars-item__price-number">0.24</span>
                  <div className="cars-item__price-units">
                    <span className="cars-item__price-units_euro">€</span>
                    <span className="cars-item__price-units_min">min.</span>
                  </div>
                </div>
              </div>
              <img src="./img/cars/5/ToyotaYarisHybrid.png" alt="Toyota Yaris Hybrid" className="cars-item__img"/>
            </div>

            <div className="cars-item">
              <div className="cars-item__text">
                <div className="cars-item__title">Drīz kaut kas jauns</div>
                <div className="cars-item__price"></div>
              </div>
              <img src="./img/cars/6/car.png" alt="Drīz kaut kas jauns" className="cars-item__img"/>
            </div>

          </div>
        </div>
      </section>

      <section className="map">
        <GoogleMap />
        <div className="map-container">
          <div className="container">
          
            <div className="map-block">
              <div className="map-block__header">
                <span>automašinas</span>
                <label className="map-block__switch">
                  <input className="map-block__input" type="checkbox"/>
                  <span className="map-block__slider"></span>
                </label>
                <span>atstāšanas zona</span>
              </div>

              <div className="map-block__body">
                <div className="map-block__title">Atstāšanas zona un mašīnas</div>
                <div className="map-block__subtitle">
                  90 jauni hibrīda automobiļi izklāstīti pa visu pilsētu.
                </div>
                <div className="map-block__info">
                  <span className="map-block__info-title">Pieejamās automašīnas</span>
                  <span className="map-block__info-count">27</span>
                  <div className="map-block__info-img">
                    <img src="img/map/car.svg" alt="Pieejamās automašīnas"/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-block">
            <div className="footer-news">
              <div className="footer-news__title">Jaunumi</div>

              <div className="footer-new">
                <div className="footer-new__date">12. feb. 2019</div>
                <a href="/#">
                  <div className="footer-new__title">
                    Lasi interviju ar Carguru idejas autoru un uzņēmuma vadītāju Vladimiru Reskāju. 
                  </div>
                </a>
              </div>
              <div className="footer-new">
                <div className="footer-new__date">10. feb. 2019</div>
                <div className="footer-new__title">
                  +25, pavisam jaunajiem Toyota C-HR un Yaris hibridiem Carguru ir papildinājis savu autoparku.
                </div>
              </div>
            </div>

            <div className="footer-info">
              <div className="footer-block__nav">
                <div className="footer-nav">
                  <a className="footer-nav__item" href="/#">Par mums</a>
                  <a className="footer-nav__item" href="/#">Cenas</a>
                  <a className="footer-nav__item" href="/#">Instrukcija</a>
                  <a className="footer-nav__item" href="/#">Informacija</a>
                  <a className="footer-nav__item" href="/#">Uzņēmumiem</a>
                  <a className="footer-nav__item" href="/#">Ziņas</a>
                </div>

                <div className="footer-select" tabIndex="1">
                  <span className="footer-select__value">Latviski</span>
                  <ul className="footer-select__dropdown">
                    <li className="footer-select__option" value='lat'>Latviski</li>
                    <li className="footer-select__option" value='rus'>Русский</li>
                    <li className="footer-select__option" value='eng'>English</li>
                  </ul>
                </div>
              </div>

              <div className="footer-block__contacts">
                <div className="footer-contacts">
                  <a href="tel:+37127332733" className="footer-contact footer-contact__phone">+371 273 327 33</a>
                  <a href="mailto:info@carguru.lv" className="footer-contact footer-contact__mail">info@carguru.lv</a>
                  
                  <a href="https://goo.gl/maps/cqNfsE24gbBH4VHW7" target="_blank" rel="noreferrer" className="footer-contact footer-contact__address">
                    Kungu iela 8,
                    <br/>
                    Riga, LV-1050,
                    <br/>
                    Latvija
                  </a>
                  
                </div>
                <div className="footer-buttons">
                  <a href="/#">
                    <div className="footern__button button button-ios__light"/>
                  </a>
                  <a href="/#">
                    <div className="footer__button button button-android__light"/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-block__remark">
            <div className="footer-remark__info">
              <a href="/#">Nolīgums</a>
              <a href="/#">Noderīga informācija</a>
            </div>
            <div className="footer-remark">
              <div className="footer-remark__socials">
                <a href="/#" className="footer-remark__social">
                  <img src="img/footer/facebook.svg" alt="facebook"/>
                </a>
                <a href="/#" className="footer-remark__social">
                  <img src="img/footer/instagram.svg" alt="instagram"/>
                </a>
              </div>
              <a href="/#" className="footer-remark__author">
                Mājas lapas dizains — Scada
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FourthTask;