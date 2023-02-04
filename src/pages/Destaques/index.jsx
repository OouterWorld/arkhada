import React from "react";
import styles from './Destaques.module.scss';
import CartaoDestaque from "./CartaoDestaque/index";
import Banner from "./Banner/index";
import Cartao from "./Cartao/index";

export default function Destaques() {
  return (
    <main className={styles.destaque_pagina}>
      <div className={styles.cabeca}>
        <CartaoDestaque />
        <Banner />
      </div>
        <Cartao />
    </main>
  )
}