import { useState } from 'react';
import styles from "./Searcher.module.scss"
import style from "./../Header.module.scss"

export default function SearchButton() {
  const [isSearchExpanded, setSearchExpanded] = useState(false);

  const toggleSearchBar = () => {
    setSearchExpanded(!isSearchExpanded);
  };

  return (
    <div className={styles.container__search}>
      {isSearchExpanded && (
        <div className={styles.searcher__container}>
          <input className={styles.header__search} type="text" placeholder="Search" />
        </div>
      )}
      <button className={styles.search__button} onClick={toggleSearchBar}><i className={styles.gg_zoom_in}></i></button>
    </div>
  );
}
