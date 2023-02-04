import React from 'react'

export default function Card({ roupas, styles }) {
  return (
    <div className={styles.corpo}>
      <div className={styles.container_cartoes}>
        {roupas.map((item) => {
          return (
            <div key={item.id} className={styles.cartao}>
              <img
                className={styles.cartao_imagem}
                src={item.foto}
                alt={item.titulo}
              />
              <div className={styles.cartao_conteudo}>
                <div className={styles.cartao_conteudo_texto}>
                  <h3 className={styles.cartao_titulo}>{item.titulo}</h3>
                  <p className={styles.cartao_info}>{item.tag}</p>
                  <p className={styles.cartao_info}>{item.cores} Cores</p>
                </div>
                <div className={styles.cartao_conteudo_preco}>
                  <p className={styles.cartao_preco}>R${item.preco}</p>
                  <button className={styles.cartao_botao}></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}