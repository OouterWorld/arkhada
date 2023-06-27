//import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.header__container}>
        <p className={styles.header__text}>A cobra se pega pela cabeça</p>
        <h1 className={styles.header__logo}>Arkhada</h1>
        <ul className={styles.header__list}>
          <li className={styles.header__favourites}><a><i className={styles.gg_bookmark}></i></a></li>
          <li className={styles.header__shopping_cart}><a><i className={styles.gg_shopping_cart}></i></a></li>
          <li className={styles.header__profile}><a><i className={styles.gg_profile}></i></a></li>
        </ul>
      </div>
      <div className={styles.header__container_sub}>
        <ul className={styles.header__categorys}>
          <li className={styles.header__home}>
            <a className={styles.selected}><p>Tendencia</p></a>
          </li>
          <li>
            <a><p>Novidades</p></a>
          </li>
          <li>
            <a><p>Acessorios</p></a>
          </li>
          <li>
            <a><p>Coleções</p></a>
          </li>
          <li>
            <a><p>Esportivo</p></a>
          </li>
          <li>
            <a><p>Masculino</p></a>
          </li>
          <li>
            <a><p>Feminino</p></a>
          </li>
          <li>
            <a><p>Infantil</p></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
