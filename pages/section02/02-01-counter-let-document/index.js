export default function CounterLetDocumentPage() {

    function onClickCountUp() {
        const count = Number(document.getElementById("num").innerText) + 1;
        document.getElementById("num").innerText = count;
    }

    function onClickCountDown() {
        const count = Number(document.getElementById("num").innerText) - 1;
        document.getElementById("num").innerText = count;
    }

    return (
        <div>
            <div id="num">0</div>
            <button onClick={onClickCountUp}>count up</button>
            <button onClick={onClickCountDown}>count down</button>
        </div>
    )
}