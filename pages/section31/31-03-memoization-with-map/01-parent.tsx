import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationParentWithMapPage(): JSX.Element {
  const [data, setData] = useState("Hello Kitty Pink");

  const onClickChange = (): void => {
    setData("Hello Pudding Yellow");
  };

  return (
    <>
      {data.split(" ").map((el, index) => (
        <Word key={index} el={el} />
      ))}
      <br />
      {data.split(" ").map((el, index) => (
        <Word key={uuidv4()} el={el} />
      ))}
      <br />
      <button onClick={onClickChange}>change</button>
    </>
  );
}
