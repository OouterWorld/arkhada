import Card from "./Card/index";
import styles from './Cartao.module.scss'
import vestuario from './vestuario.json';
import { useState } from "react";

export default function Cartao() {
  const [roupas, setRoupas] = useState(vestuario);

  return (
    <section>
      <Card roupas={roupas} styles={styles} />
    </section>
  )
};
