import React from 'react';
import styles from './CartaoDestaque.module.scss';
import posing from './../../../images/posing4.png';

export default function CartaoDestaque() {
  return (
    <article className={styles.container_destaque}>
      <button className={styles.botao_destaque} />
      <div className={styles.cartao_destaque}>
        <img className={styles.cartao_imagem_destaque} src={posing} alt="Imagem de Roupa" />
        <div className={styles.cartao_conteudo}>
          <div className={styles.cartao_conteudo_texto}>
            <p className={styles.texto_destaque}>Destaque</p>
            <h3 className={styles.cartao_titulo_destaque}>Full Black</h3>
            <p className={styles.cartao_info_destaque}>Gorro - Camisa - Calça</p>
            <p className={styles.cartao_info_destaque}>+17 Cores</p>
            <p className={styles.cartao_perfil_destaque}>Produção por Gabriel Lucena</p>
          </div>
          <div className={styles.cartao_conteudo_preco}>
            <p className={styles.cartao_preco_destaque}>R$33,33</p>
            <button className={styles.cartao_botao_destaque}></button>
          </div>
        </div>
      </div>
      <button className={styles.botao_destaque} />
    </article>
  )
}