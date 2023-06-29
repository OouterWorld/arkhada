import styles from './CardsHighlight.module.scss';
import { useState } from "react";

export default function CartaoDestaque() {

  const [activeId, setActiveId] = useState('1'); // Set the initial state of activeId to '1'
  const images = [
    '/posing4.png',
    '/posing1.png',
    '/posing2.png',
    '/posing3.png'
  ];

  const handleClick = (id) => {
    setActiveId(id)
  };

  const handleIncrement = (id) => {
    const nextId = parseInt(activeId) + 1;
    if (nextId <= 4) {
      setActiveId(nextId.toString());
    }
  };

  const handleDecrement = () => {
    const prevId = parseInt(activeId) - 1;
    if (prevId >= 1) {
      setActiveId(prevId.toString());
    }
  };

  return (
    <article className={styles.container__highlight}>
      <button className={styles.button__highlight} onClick={handleDecrement}><div className={styles.icon_arrow_l} /></button>
      <div className={styles.card__highlight}>
        <div className={styles.wrap}>
          <img className={styles.card__image__highlight} src={images[parseInt(activeId) - 1]} alt="Imagem de Roupa" />
          <div className={styles.cell}>
            <ul className={styles.dots}>
              <li id="1" className={activeId === '1' ? styles.active : ''}><a onClick={() => handleClick('1')}></a></li>
              <li id="2" className={activeId === '2' ? styles.active : ''}><a onClick={() => handleClick('2')}></a></li>
              <li id="3" className={activeId === '3' ? styles.active : ''}><a onClick={() => handleClick('3')}></a></li>
              <li id="4" className={activeId === '4' ? styles.active : ''}><a onClick={() => handleClick('4')}></a></li>
            </ul>
          </div>
        </div>
        <div className={styles.card__content}>
          <div className={styles.card__content__text}>
            <p className={styles.text__highlight}>Destaques</p>
            <h3 className={styles.card__title__highlight}>Full Black</h3>
            <p className={styles.card__info__highlight}>Gorro</p>
          </div>
          <div className={styles.card__content__price}>
            <p className={styles.card__price__highlight}>R$33,33</p>
            <button className={styles.card__button__highlight}><i className={styles.gg_shopping_cart}></i></button>
          </div>
        </div>
      </div>
      <button className={styles.button__highlight} onClick={handleIncrement}><div className={styles.icon_arrow_r} /></button>
    </article>
  )
}
