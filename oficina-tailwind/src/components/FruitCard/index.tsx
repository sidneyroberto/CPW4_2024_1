import styles from "./styles.module.css";

type Props = {
  thumbURL: string;
  fruit: string;
  benefits: string;
};

const FruitCard = ({ benefits, fruit, thumbURL }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbArea}>
        <img src={thumbURL} alt={fruit} />
      </div>

      <div className={styles.contentArea}>
        <div className={styles.metadata}>
          <span className={styles.key}>Nome:</span>
          <span className={styles.value}>{fruit}</span>
        </div>

        <div className={styles.metadata}>
          <span className={styles.key}>Benefícios:</span>
          <span className={styles.value}>{benefits}</span>
        </div>
      </div>
    </div>
  );
};

export default FruitCard;
