export default function Child1(props: any): JSX.Element {
  function onClickCountUp(): void {
    props.setCount((prev: number) => prev + 1);
  }

  return (
    <div>
      <div>child1: {props.count}</div>
      <button onClick={onClickCountUp}>count up</button>
    </div>
  );
}
