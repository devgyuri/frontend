import {useState} from 'react';

export default function CounterLetDocumentPage(): JSX.Element {
    const [count, setCount] = useState(0)

    function onClickCountUp(): void {
        setCount((prev) => prev + 1);
        
        setCount(function (prev) {
            return prev + 1
        });

        setCount((qqq) => qqq + 1);
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={onClickCountUp}>count up</button>
        </div>
    )
};