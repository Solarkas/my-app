import React, { useState } from "react";
import Counter from "./counter";
import { handleIncrement, handleDecrement } from "./incrementDecrement";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: 200 },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) =>
    setCounters(counters.filter((element) => element.id !== id));

  const handleReset = () => setCounters(initialState);

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={() => handleIncrement(count, setCounters, counters)}
          onDecrement={() => handleDecrement(count, setCounters, counters)}
        ></Counter>
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};
export default CountersList;
