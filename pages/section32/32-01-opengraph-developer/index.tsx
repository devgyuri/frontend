import axios from "axios";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

export default function OpengraphDeveloperPage(): JSX.Element {
  const onClickEnter = async (): Promise<void> => {
    const result = await axios.get(
      "http://localhost:3000/section32/32-01-opengraph-provider",
    );
    console.log(result.data);

    // console.log(result.data.split("<meta"));
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og:")),
    );
  };

  return (
    <>
      <button onClick={wrapAsync(onClickEnter)}>채팅 입력 후 Enter!!</button>
    </>
  );
}
