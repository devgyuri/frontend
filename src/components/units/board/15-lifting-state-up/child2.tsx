export default function Child2(props: any): JSX.Element {
  return (
    <div>
      <div>child2: {props.count}</div>
      <button onClick={props.onClickCount}>count up</button>
    </div>
  );
}
