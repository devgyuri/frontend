import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";
import Input01 from "../../../src/commons/inputs/01";
import Button01 from "../../../src/commons/buttons/01";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  // boardAddress: {
  //   addressDetail: string;
  // };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  console.log("Do rerendering?");

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <Input01 type={"text"} register={register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <Input01 type={"text"} register={register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <Input01 type={"text"} register={register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 주소: <Input01 type={"text"} register={register("boardAddress.addressDetail")} /> */}
      <Button01 title={"등록하기"} isActive={formState.isValid} />
    </form>
  );
}
