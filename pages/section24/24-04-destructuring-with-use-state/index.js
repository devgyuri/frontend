import { useState } from "react";

export default function CounterLetDocumentPage() {
  const result = useState(0);

  function onClickCountUp() {
    result[1](result[0] + 1);
  }

  function onClickCountDown() {
    result[1](result[0] - 1);
  }

  return (
    <div>
      <div>{result[0]}</div>
      <button onClick={onClickCountUp}>count up</button>
      <button onClick={onClickCountDown}>count down</button>
    </div>
  );
}
