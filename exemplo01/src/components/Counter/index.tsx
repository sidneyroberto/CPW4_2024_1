import { CounterPanel, CounterTitle, CounterValue } from "./styles";

type Props = {
  value: number;
};

const Counter = ({ value }: Props) => {
  return (
    <CounterPanel data-cy="counter-panel">
      <CounterTitle data-cy="counter-title">Valor do contador:</CounterTitle>
      <CounterValue data-cy="counter-value">{value}</CounterValue>
    </CounterPanel>
  );
};

export default Counter;
