import "./App.css";

import { Top } from "./components/Top/Top";
import { Banner } from "./components/Banner/Banner";

import jordan1 from "./assets/jordan1.svg";
import jordan2 from "./assets/jordan2.svg";
import jordan3 from "./assets/jordan3.svg";
import jordan4 from "./assets/jordan4.svg";
import jordan5 from "./assets/jordan5.svg";
import jordan6 from "./assets/jordan6.svg";

function App() {
  return (
    <>
      <Top />

      <Banner />

      <div className="catalog">
        <div className="catalogText">
          <h4 className="catalogTitle">Os melhores em um só lugar</h4>
          <p className="catalogParagraph">
            A marca Jordan na JordanShoes é a escolha certa para os amantes de
            sneakers que buscam estilo e conforto.
          </p>
        </div>

        <div className="containerCards">
          <div className="card">
            <div className="cardImage">
              <img
                className="image"
                src={jordan1}
                alt="Air Jordan 1 Mid Dutch Green"
              />
            </div>
            <div className="cardText">
              <p className="cardTitle">Air Jordan 1 Mid Dutch Green</p>
              <p className="cardDescription">Tênis Air Jordan</p>
              <p className="cardValue">R$ 1.199,99</p>
            </div>
          </div>

          <div className="card">
            <div className="cardImage">
              <img
                className="image"
                src={jordan2}
                alt="Air Jordan 1 High Zoom CMFT Tropical Twist"
              />
            </div>
            <div className="cardText">
              <p className="cardTitle">
                Air Jordan 1 High Zoom CMFT Tropical Twist
              </p>
              <p className="cardDescription">Tênis Air Jordan</p>
              <p className="cardValue">R$ 1.049,00</p>
            </div>
          </div>

          <div className="card">
            <div className="cardImage">
              <img
                className="image"
                src={jordan3}
                alt="Air Jordan 1 Mid Dutch Lilac"
              />
            </div>
            <div className="cardText">
              <p className="cardTitle">Air Jordan 1 Mid Dutch Lilac</p>
              <p className="cardDescription">Tênis Air Jordan</p>
              <p className="cardValue">R$ 1.350,00</p>
            </div>
          </div>

          <div className="card">
            <div className="cardImage">
              <img
                className="image"
                src={jordan4}
                alt='Air Jordan 1 Mid GS "Light Smoke Grey"'
              />
            </div>
            <div className="cardText">
              <p className="cardTitle">
                Air Jordan 1 Mid GS "Light Smoke Grey"
              </p>
              <p className="cardDescription">Tênis Air Jordan</p>
              <p className="cardValue">R$ 1.585,00</p>
            </div>
          </div>

          <div className="card">
            <div className="cardImage">
              <img
                className="image"
                src={jordan5}
                alt="Air Jordan 1 Mid SE Bright Citrus"
              />
            </div>
            <div className="cardText">
              <p className="cardTitle">Air Jordan 1 Mid SE Bright Citrus</p>
              <p className="cardDescription">Tênis Air Jordan</p>
              <p className="cardValue">R$ 949,99</p>
            </div>
          </div>

          <div className="card">
            <div className="cardImage">
              <img
                className="image"
                src={jordan6}
                alt="Air Jordan 1 Mid Grey Camo"
              />
            </div>
            <div className="cardText">
              <p className="cardTitle">Air Jordan 1 Mid Grey Camo</p>
              <p className="cardDescription">Tênis Air Jordan</p>
              <p className="cardValue">R$ 999,99</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
