import { gql, useMutation } from "@apollo/client";
import { type ChangeEvent, useState } from "react";
import type { IMutation, IMutationLoginUserArgs } from "../../../src/commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/components/commons/stores";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  }

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password
        }
      });
      const accessToken = result.data?.loginUser.accessToken
      console.log(accessToken);
  
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
  
      void router.push("/section23/23-02-login-localstorage-success");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  return (
    <>
      email: <input type="text" onChange={onChangeEmail} />
      password: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>login</button>
    </>
  );
}