import { useBearStore } from "../../store";

const Counter = () => {
  const [count, increaseCount, resetCount] = useBearStore((state) => [
    state.count,
    state.increaseCount,
    state.resetCount,
  ]);
  return (
    <div className="card">
      <button onClick={increaseCount}>count is {count}</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};
export default Counter;
