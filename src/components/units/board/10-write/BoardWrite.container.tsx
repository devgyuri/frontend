import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
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
        router.push(`/section09/10-02-typescript-boards/${result.data.createBoard.number}`);
    };

    const onClickUpdate = async () => {
        const myVariables: IMyVariables = {
            number: Number(router.query.number)
        };
        if(writer) {
            myVariables.writer = writer;
        }
        if(title) {
            myVariables.title = title;
        }
        if(contents) {
            myVariables.contents = contents;
        }
        
        const result = await updateBoard({
            variables: myVariables
        });
        console.log(result);
        router.push(`/section10/10-02-typescript-boards/${result.data.updateBoard.number}`);
    };

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
        console.log("test");
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
            data={props.data}
        />
    );
};