import { useCallback, useMemo, useState } from "react";
import MemoizationWithChildPage from "./02-child";

export default function MemoizationParentPage(): JSX.Element {
  console.log("parent rendering!");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  const onClickCountLet = useCallback((): void => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  const onClickCountState = useCallback((): void => {
    setCountState((prev) => prev + 1);
    console.log(countState);
  }, []);

  return (
    <>
      <div>==========================================</div>
      <h1>I&apos;m parent component!!</h1>

      <div>count(let): {countLet}</div>
      <button onClick={onClickCountLet}>count up(let)</button>

      <div>count(state): {countState}</div>
      <button onClick={onClickCountState}>count up(state)</button>

      <div>==========================================</div>

      <MemoizationWithChildPage qqq={countState} />
    </>
  );
}
