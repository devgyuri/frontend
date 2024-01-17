import { useMutation, gql } from "@apollo/client";
import { type ChangeEvent, useState } from "react";

const myGraphqlSetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [myFunction] = useMutation(myGraphqlSetting);

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunction({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div>
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GraphQL API request</button>
    </div>
  );
}
