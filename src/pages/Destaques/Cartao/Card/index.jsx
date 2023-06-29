//import foto from "../../../../images/posing1.png"

export default function Card({ roupas, styles }) {
  return (
    <div>
      <div className={styles.container__cards}>
        {roupas.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <img
                className={styles.card__image}
                src={item.imagem}
                alt={item.titulo}
              />
              <div className={styles.card__content}>
                <div className={styles.card__content__text}>
                  <h3 className={styles.card__title}>{item.titulo}</h3>
                  <p className={styles.card__info}>{item.tag}</p>
                  <p className={styles.card__info}>{item.cores} Cores</p>
                </div>
                <div className={styles.card__content__price}>
                  <p className={styles.card__price}>R${item.preco}</p>
                  <button className={styles.card__button}><i className={styles.gg_shopping_cart}></i></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
