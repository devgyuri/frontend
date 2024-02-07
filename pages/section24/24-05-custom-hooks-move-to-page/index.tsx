import { useMoveToPage } from "../../../src/components/commons/hooks/useMoveToPage";

export default function CumtomHooksUseAuthPage(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <button onClick={onClickMoveToPage("/boards")}>move to board</button>
      <button onClick={onClickMoveToPage("/markets")}>move to market</button>
      <button onClick={onClickMoveToPage("/myPages")}>move to myPage</button>
    </>
  );
}
