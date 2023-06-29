//import React from "react";
import styles from './Destaques.module.scss'
import BannerHighlight from "./BannerHighlight/index"
import Cartao from "./Cartao/index";
import CardsHighlight from "./CardsHighlight/index";
import Banner from "./Banner/index"

export default function Destaques() {
  return (
    <main className={styles.destaque_pagina}>
      <BannerHighlight />
      <p className={styles.dentro}>Fique por dentro</p>
      <div className={styles.cabeca}>
        <CardsHighlight />
        <Banner />
      </div>
      <div className={styles.corpo}>
        <p className={styles.recomendados}>Recomendamos para você</p>
        <Cartao />
      </div>
    </main>
  )
}
