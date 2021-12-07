import React from "react";
import { getBageClasses } from "./getClasses";
import { formatValue } from "./formatValue";

const Counter = (props) => {
  let { value } = props;

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses(value)}>{formatValue(value)}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={props.onIncrement}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={props.onDecrement}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
