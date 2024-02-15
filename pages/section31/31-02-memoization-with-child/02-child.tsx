import { memo } from "react";

function MemoizationWithChildPage(props: any): JSX.Element {
  console.log("child rendering!");

  return (
    <>
      <div>==========================================</div>
      <h1>I&apos;m child component!!</h1>
      <div>==========================================</div>
    </>
  );
}

export default memo(MemoizationWithChildPage);
