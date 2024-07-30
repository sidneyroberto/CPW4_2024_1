import styles from "./App.module.css";
import FruitCard from "./components/FruitCard";
import abacate from "./assets/img/abacate.jpg";
import banana from "./assets/img/banana.jpg";
import maca from "./assets/img/maca.jpg";
import mamao from "./assets/img/mamao.jpg";
import tomate from "./assets/img/tomate.jpg";

const App = () => {
  return (
    <div className={styles.container}>
      <FruitCard
        thumbURL={abacate}
        fruit="Abacate"
        benefits="Além de ser uma boa fonte de energia para o organismo, o abacate
              contém potássio, vitaminas A e C, e equivalente de folato (ácido
              fólico). Com potencial antioxidante, a fruta é um bom auxiliar
              para a saúde de ossos e dentes e ainda atua na redução da fadiga
              mental."
      />

      <FruitCard
        thumbURL={banana}
        fruit="Banana"
        benefits="A banana contém vitamina A, vitamina C e vitaminas do complexo B,
              além de ser ótima fonte de potássio e carboidratos, cálcio, ferro,
              fósforo, sódio, zinco e fibras. O alto teor de carboidratos faz
              com que ela seja uma fruta que fornece energia ao organismo."
      />

      <FruitCard
        thumbURL={maca}
        fruit="Maçã"
        benefits="Maçã é rica em potássio e fibras. Além disso, contém boas
              quantidades de fósforo, magnésio e cálcio e também conta com
              vitaminas do complexo B e vitamina C."
      />

      <FruitCard
        thumbURL={mamao}
        fruit="Mamão"
        benefits="A fruta tem muitas vitaminas e minerais, entre eles, vitaminas A, C, E e do complexo B, além dos minerais cálcio, magnésio, fósforo, potássio, cobre. Além disso, ela facilita o trânsito intestinal."
      />

      <FruitCard
        thumbURL={tomate}
        fruit="Tomate"
        benefits="Além do licopeno, o tomate também é rico em vitamina C e potássio
              que, juntos, favorecem o transporte do oxigênio no sangue,
              trazendo importantes benefícios para a saúde cardiovascular."
      />
    </div>
  );
};

export default App;
