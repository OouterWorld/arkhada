import styles from "./BannerHighlight.module.scss"

export default function BannerHighlight() {
  return (
    <article>
      <a href="#">
        <p className={styles.banner__text}>Comprar</p>
        <img src="/bannerhighlight.jpg" className={styles.banner__highlight}></img>
      </a>
    </article>
  )
}
