import { memo } from "react";

interface IWordProps {
  el: string;
}

function Word(props: IWordProps): JSX.Element {
  console.log("child rendering!!", props.el);

  return <span>{props.el}</span>;
}

export default memo(Word);
