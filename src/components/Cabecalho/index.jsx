import React from "react";
import styles from "./Cabecalho.module.scss";

export default function Cabecalho() {
  return (
    <nav className={styles.cabecalho}>
      <div className={styles.cabecalho_container}>
        <h1 className={styles.cabecalho_logo}>Arkhada</h1>
        <div className={styles.container_busca} >
          <input className={styles.cabecalho_buscador} placeholder="Buscar"></input>
        </div>
        <ul className={styles.cabecalho_lista}>
          <li className={styles.cabecalho_favoritos}>
            <i className={styles.gg_bookmark}><a></a></i>
          </li>
          <li className={styles.cabecalho_compras}>
            <i className={styles.gg_shopping_cart}><a></a></i>
          </li>
          <li className={styles.cabecalho_perfil}>
            <i className={styles.gg_profile}><a></a></i>
          </li>
        </ul>
      </div>
    </nav>
  )
}