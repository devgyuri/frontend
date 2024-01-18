import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("hello");
  const router = useRouter();

  useEffect(() => {
    console.log("execute after rendering");
  }, []);

  useEffect(() => {
    console.log("execute after update");
  });

  useEffect(() => {
    return () => {
      console.log("execute before unmount");
    };
  }, []);

  useEffect(() => {
    console.log("execute after rendering");
    return () => {
      console.log("execute before unmount");
    };
  }, [count, title]);

  const onClickCountUp = (): void => {
    setCount(count + 1);
    setTitle(title);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <div>
      <div>{title}</div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>count up</button>
      <button onClick={onClickMove}>exit</button>
    </div>
  );
}
