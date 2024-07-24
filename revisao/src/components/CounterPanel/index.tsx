import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type Props = {
  sentence: string;
};

const CounterPanel = ({ sentence }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(sentence.length);
  }, [sentence]);

  return (
    <div className={styles.panel}>
      <p data-cy="counter-result">A frase contém {count} caracteres.</p>
    </div>
  );
};

export default CounterPanel;
