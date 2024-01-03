const FRUITS = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스켓"},
    {number: 3, title: "딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "바나나"},
    {number: 6, title: "키위"},
    {number: 7, title: "블루베리"},
    {number: 8, title: "애플망고"},
    {number: 9, title: "복숭아"},
    {number: 10, title: "포도"}
];

export default function MapFruitsPage() {
    const aaa = [<div>1 레드향</div>, <div>2 샤인머스켓</div>, <div>3 딸기</div>];
    
    const bbb = FRUITS.map((el) => <div>{el.number} {el.title}</div>);

    return (
        <div>
            <div>{aaa}</div>
            ======================
            <div>{bbb}</div>
            ======================
            <div>{FRUITS.map((el) => <div>{el.number} {el.title}</div>)}</div>
        </div>
    );
};