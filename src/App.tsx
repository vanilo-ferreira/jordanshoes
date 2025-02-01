import jordan1 from "./assets/jordan1.svg";
import jordan2 from "./assets/jordan2.svg";
import jordan3 from "./assets/jordan3.svg";
import jordan4 from "./assets/jordan4.svg";
import jordan5 from "./assets/jordan5.svg";
import jordan6 from "./assets/jordan6.svg";

function App() {
  return (
    <>
      <div>
        <p>Frete grátis para todo o Brasil</p>
      </div>

      <div>
        <p>JordanShoes</p>
        <h4>A melhor loja de Jordan</h4>
        <p>
          O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o
          jogador Michael Jordan.
        </p>
      </div>

      <div>
        <div>
          <h4>Os melhores em um só lugar</h4>
          <p>
            A marca Jordan na JordanShoes é a escolha certa para os amantes de
            sneakers que buscam estilo e conforto.
          </p>
        </div>

        <div>
          <div>
            <div>
              <img src={jordan1} alt="Air Jordan 1 Mid Dutch Green" />
            </div>
            <div>
              <p>Air Jordan 1 Mid Dutch Green</p>
              <p>Tênis Air Jordan</p>
              <p>R$ 1.199,99</p>
            </div>
          </div>

          <div>
            <div>
              <img
                src={jordan2}
                alt="Air Jordan 1 High Zoom CMFT Tropical Twist"
              />
            </div>
            <div>
              <p>Air Jordan 1 High Zoom CMFT Tropical Twist</p>
              <p>Tênis Air Jordan</p>
              <p>R$ 1.049,00</p>
            </div>
          </div>

          <div>
            <div>
              <img src={jordan3} alt="Air Jordan 1 Mid Dutch Lilac" />
            </div>
            <div>
              <p>Air Jordan 1 Mid Dutch Lilac</p>
              <p>Tênis Air Jordan</p>
              <p>R$ 1.350,00</p>
            </div>
          </div>

          <div>
            <div>
              <img src={jordan4} alt='Air Jordan 1 Mid GS "Light Smoke Grey"' />
            </div>
            <div>
              <p>Air Jordan 1 Mid GS "Light Smoke Grey"</p>
              <p>Tênis Air Jordan</p>
              <p>R$ 1.585,00</p>
            </div>
          </div>

          <div>
            <div>
              <img src={jordan5} alt="Air Jordan 1 Mid SE Bright Citrus" />
            </div>
            <div>
              <p>Air Jordan 1 Mid SE Bright Citrus</p>
              <p>Tênis Air Jordan</p>
              <p>R$ 949,99</p>
            </div>
          </div>

          <div>
            <div>
              <img src={jordan6} alt="Air Jordan 1 Mid Grey Camo" />
            </div>
            <div>
              <p>Air Jordan 1 Mid Grey Camo</p>
              <p>Tênis Air Jordan</p>
              <p>R$ 999,99</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
