interface IExampleProps {
  school: string;
  children: JSX.Element;
}

export default function Example(props: IExampleProps): JSX.Element {
  return (
    <div>
      <div>Hello my name is younhee</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>Hello my name is chulsu</div>
    </div>
  );
}
