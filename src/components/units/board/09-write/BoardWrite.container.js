import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD)
    
    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        });
        console.log(result);
        router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
    };

    const onClickUpdate = async () => {
        const result = await updateBoard({
            variables: {
                number: Number(router.query.number),
                writer,
                title,
                contents
            }
        });
        console.log(result);
        router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
    };

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        console.log("test");
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);
    }

    return (
        <BoardWriteUI 
            onClickSubmit={onClickSubmit} 
            onClickUpdate={onClickUpdate}
            onChangeWriter={onChangeWriter} 
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            isEdit={props.isEdit}
        />
    );
};