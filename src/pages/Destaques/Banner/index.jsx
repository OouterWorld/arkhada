import React from 'react'
import styles from "./Banner.module.scss"
import banner from '../../../images/banner.png';

export default function Banner() {
  return (
    <article className={styles.container_banner}>
      <div className={styles.banners}>
        <a><img src={banner} className={styles.banners_img}></img></a>
      </div>
      <div className={styles.banners}>
        <a><img src={banner} className={styles.banners_img}></img></a>
      </div>
      <div className={styles.banners}>
        <a><img src={banner} className={styles.banners_img}></img></a>
      </div>
      <div className={styles.banners}>
        <a><img src={banner} className={styles.banners_img}></img></a>
      </div>
    </article>
  )
}