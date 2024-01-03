export default function Checkbox(): JSX.Element {
  const qqq2 = (event: any): void => {
    alert("2번 클릭");
  };

  const qqq3 = (event: any): void => {
    event.stopPropagation();
    alert("3번 클릭");
  };

  return (
    <span onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}
