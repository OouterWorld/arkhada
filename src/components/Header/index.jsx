//import React from "react";
import styles from "./Header.module.scss";
import Searcher from "./Searcher/index.jsx";
import { useState } from "react";
// I need to make the header__categorys work with the URL

export default function Header() {

  const [selectedID, setSelectedID] = useState('1');

  const handleClick = (id) => {
    setSelectedID(id)
  };

  return (
    <nav className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__align}>
          <p className={styles.header__text}>Entregamos em todo o Brasil!</p>
        </div>
        <div className={styles.header__align}>
          <h1 className={styles.header__logo}>Arkhada</h1>
        </div>
        <div className={styles.header__align}>
          <ul className={styles.header__list}>
            <li><Searcher/></li>
            <li className={styles.header__favourites}><a><i className={styles.gg_bookmark}></i></a></li>
            <li className={styles.header__shopping_cart}><a><i className={styles.gg_shopping_cart}></i></a></li>
            <li className={styles.header__profile}><a><i className={styles.gg_profile}></i></a></li>
          </ul>
        </div>
      </div>
      <div className={styles.header__container__sub}>
        <ul className={styles.header__categorys}>
          <li><a href="#" onClick={() => handleClick('1')}><p id="1" className={selectedID === '1' ? styles.selected : ''}>Tendencia</p></a></li>
          <li><a href="#" onClick={() => handleClick('2')}><p id="2" className={selectedID === '2' ? styles.selected : ''}>Novidades</p></a></li>
          <li><a href="#" onClick={() => handleClick('3')}><p id="3" className={selectedID === '3' ? styles.selected : ''}>Acessorios</p></a></li>
          <li><a href="#" onClick={() => handleClick('4')}><p id="4" className={selectedID === '4' ? styles.selected : ''}>Coleções</p></a></li>
          <li><a href="#" onClick={() => handleClick('5')}><p id="5" className={selectedID === '5' ? styles.selected : ''}>Esportivo</p></a></li>
          <li><a href="#" onClick={() => handleClick('6')}><p id="6" className={selectedID === '6' ? styles.selected : ''}>Masculino</p></a></li>
          <li><a href="#" onClick={() => handleClick('7')}><p id="7" className={selectedID === '7' ? styles.selected : ''}>Feminino</p></a></li>
          <li><a href="#" onClick={() => handleClick('8')}><p id="8" className={selectedID === '8' ? styles.selected : ''}>Infantil</p></a></li>
        </ul>
      </div>
    </nav>
  )
}
