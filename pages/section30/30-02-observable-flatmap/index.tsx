import { from } from "zen-observable";

export default function ObservableFlatmapPage(): JSX.Element {
  const onClickButton = (): void => {
    // new Promise((resolve, reject) => {});
    // new Observable((observer) => {});

    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"])
      .flatMap((el) => from([`${el}결과에 qqq 적용`, `${el}결과에 ppp 적용`]))
      .subscribe((el) => {
        console.log(el);
      });
  };

  return (
    <>
      <button style={{ width: 100, height: 50 }} onClick={onClickButton}>
        observable
      </button>
    </>
  );
}
