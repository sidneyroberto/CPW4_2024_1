import { useState } from "react";

import styles from "./App.module.css";
import SentenceInput from "./components/SentenceInput";
import CounterPanel from "./components/CounterPanel";

const App = () => {
  const [sentence, setSentence] = useState("");

  return (
    <div className={styles.container}>
      <SentenceInput
        sentence={sentence}
        setSentence={setSentence}
      ></SentenceInput>

      <CounterPanel sentence={sentence} />
    </div>
  );
};

export default App;
