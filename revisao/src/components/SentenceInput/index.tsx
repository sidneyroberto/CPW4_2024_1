import styles from "./styles.module.css";

type Props = {
  sentence: string;
  setSentence: (newState: string) => void;
};

const SentenceInput = ({ sentence, setSentence }: Props) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        data-cy="sentence-input"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        placeholder="Digite a frase"
      />
    </div>
  );
};

export default SentenceInput;
