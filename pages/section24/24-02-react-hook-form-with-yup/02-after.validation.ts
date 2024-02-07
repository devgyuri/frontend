import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required("작성자는 필수 입력입니다."),
  title: yup.string().required("제목은 필수 입력입니다."),
  contents: yup.string().required("내용은 필수 입력입니다."),

  // email: yup
  //   .string()
  //   .email("이메일 형식에 적합하지 않습니다.")
  //   .required("이메일은 필수 입력입니다."),
  // password: yup
  //   .string()
  //   .min(4, "비밀번호는 4자리 이상입니다.")
  //   .max(15, "비밀번호는 15자리 이하입니다.")
  //   .required("비밀번호는 필수 입력입니다."),
  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않습니다.")
  //   .required("휴대폰은 필수 입력입니다."),
});
