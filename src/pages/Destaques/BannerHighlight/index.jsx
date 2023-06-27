import styles from "./BannerHighlight.module.scss"

export default function BannerHighlight() {
  return (
    <article>
      <a><img src="/bannerhighlight.jpg" className={styles.Banner__highlight}></img></a>
    </article>
  )
}
