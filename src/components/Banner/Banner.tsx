import "./index.css";

import logo from "../../assets/logo.svg";

export function Banner() {
  return (
    <div className="banner">
      <div className="logo">
        <img className="logoImage" src={logo} alt="logo" />
        <p className="textLogo">JordanShoes</p>
      </div>

      <h1 className="bannerTitle">A melhor loja de Jordan</h1>
      <p className="descriptionText">
        O tênis Jordan é fruto de uma velha e forte <br /> parceria entre a Nike
        e o jogador Michael Jordan.
      </p>
    </div>
  );
}
