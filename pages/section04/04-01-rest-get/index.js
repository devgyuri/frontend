import axios from "axios";

export default function RestGetPage() {
    const onClickAsync = () => {
        const result = axios.get("https://koreanjson.com/posts/1");
        console.log(result); // promise
    };

    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1");
        console.log(result);
    };

    return (
        <div>
            <button onClick={onClickAsync}>REST-API(ASYNC)</button>
            <button onClick={onClickSync}>REST-API(SYNC)</button>
        </div>
    );
};