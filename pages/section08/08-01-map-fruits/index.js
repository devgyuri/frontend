const FRUITS = [
  { key: 1, number: 1, title: "레드향" },
  { key: 2, number: 2, title: "샤인머스켓" },
  { key: 3, number: 3, title: "딸기" },
  { key: 4, number: 4, title: "한라봉" },
  { key: 5, number: 5, title: "바나나" },
  { key: 6, number: 6, title: "키위" },
  { key: 7, number: 7, title: "블루베리" },
  { key: 8, number: 8, title: "애플망고" },
  { key: 9, number: 9, title: "복숭아" },
  { key: 10, number: 10, title: "포도" },
];

export default function MapFruitsPage() {
  const aaa = [
    <div key={1}>1 레드향</div>,
    <div key={2}>2 샤인머스켓</div>,
    <div key={3}>3 딸기</div>,
  ];

  const bbb = FRUITS.map((el) => (
    <div key={el.key}>
      {el.number} {el.title}
    </div>
  ));

  return (
    <div>
      <div>{aaa}</div>
      ======================
      <div>{bbb}</div>
      ======================
      <div>
        {FRUITS.map((el) => (
          <div key={el.key}>
            {el.number} {el.title}
          </div>
        ))}
      </div>
    </div>
  );
}
