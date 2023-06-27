import styles from "./Banner.module.scss"
// preciso criar um array para isso

export default function Banner() {

  const banner = [
  '/banner1.jpg',
  '/banner2.jpg',
  '/banner3.jpg',
  '/banner4.jpg'
  ];

  return (
    <lu className={styles.container_banner}>
      {banner.map((item) => {
          return (
            <li className={styles.banners}>
              <a href="#"><img src={item} className={styles.banners_img}></img></a>
            </li>
          )
        }
      )}
      </lu>
  )
}
