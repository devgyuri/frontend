import { useState } from "react";

export default function CounterLetDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  function onClickCountDown(): void {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>count up</button>
      <button onClick={onClickCountDown}>count down</button>
    </div>
  );
}
