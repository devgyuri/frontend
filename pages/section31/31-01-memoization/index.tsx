import { useCallback, useMemo, useState } from "react";

export default function MemoizationPage(): JSX.Element {
  console.log("컴포넌트가 렌더링 되었습니다.");

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

  // const onClickCountState2 = useMemo(
  //   () => (): void => {
  //     setCountState((prev) => prev + 1);
  //     console.log(countState);
  //   },
  //   [],
  // );

  return (
    <>
      <div>count(let): {countLet}</div>
      <button onClick={onClickCountLet}>count up(let)</button>

      <div>count(state): {countState}</div>
      <button onClick={onClickCountState}>count up(state)</button>

      {/* <div>count(state): {countState}</div>
      <button
        onClick={useCallback((): void => {
          setCountState((prev) => prev + 1);
          console.log(countState);
        }, [])}
      >
        count up(state)
      </button> */}
    </>
  );
}
