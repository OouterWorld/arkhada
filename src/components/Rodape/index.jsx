import React from "react";
import styles from './Rodape.module.scss'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <h3 className={styles.rodape_logo}>Arkhada</h3>
            <p className={styles.copyright}>2023-2023 ©</p>
            <div className={styles.rodape_container}>
                <ul className={styles.rodape_lista}>
                    <p className={styles.rodape_lista_titulo}>Grupo arkhada</p>
                    <li className={styles.rodape_botao_site}><a>zz</a></li>
                    <li className={styles.rodape_botao_site}><a>zz</a></li>
                    <li className={styles.rodape_botao}><a>zz</a></li>
                    <li className={styles.rodape_botao}><a>zz</a></li>
                </ul>
                <ul className={styles.rodape_lista}>
                    <p className={styles.rodape_lista_titulo}>Sobre</p>
                    <li className={styles.rodape_botao}><a>zz</a></li>
                    <li className={styles.rodape_botao}><a>zz</a></li>
                </ul>
                <ul className={styles.rodape_lista}>
                    <p className={styles.rodape_lista_titulo}>Ajuda</p>
                    <li className={styles.rodape_botao}><a>zz</a></li>
                    <li className={styles.rodape_botao}><a>zz</a></li>
                </ul>
                <ul className={styles.rodape_lista}>
                    <p className={styles.rodape_lista_titulo}>Contato</p>
                    <li className={styles.rodape_botao}><a></a></li>
                    <li className={styles.rodape_botao}><a></a></li>
                </ul>
            </div>
        </footer>
    )
}
