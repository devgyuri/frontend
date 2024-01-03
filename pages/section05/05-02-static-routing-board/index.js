import { useRouter } from "next/router";

export default function StaticRoutingPage() {
    const router = useRouter();

    const onClickMove1 = () => {
        router.push("/section05/05-02-static-routing-board-moved/01");
    };

    const onClickMove2 = () => {
        router.push("/section05/05-02-static-routing-board-moved/02");
    };

    const onClickMove3 = () => {
        router.push("/section05/05-02-static-routing-board-moved/03");
    };
    
    return (
        <div>
            <div>
                <button onClick={onClickMove1}>게시글1</button>
            </div>
            <div>
                <button onClick={onClickMove2}>게시글2</button>
            </div>
            <div>
                <button onClick={onClickMove3}>게시글3</button>
            </div>
        </div>
    );
};