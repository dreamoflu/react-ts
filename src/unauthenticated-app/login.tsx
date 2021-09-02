// import { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input } from "antd";

import { LongButton } from "./index";
import { useAsync } from "../utils/use-async";
import { useDocumentTitle } from "../utils";

export const LoginScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { login, user } = useAuth();
  // HTMLFormElement extends Element
  // 未使用antd
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //     .value;
  //   const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //     .value;
  //   login({ username, password });
  // };

  // 使用antd
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      await run(login(values));
    } catch (e) {
      console.log(e);
    }
  };
  // useDocumentTitle("登录", false);
  return (
    <Form onFinish={handleSubmit}>
      {user ? <div>登录成功，用户名：{user?.name}</div> : null}
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        {/*<label htmlFor="username">用户名</label>*/}
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        {/*<label htmlFor="password">密码</label>*/}
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} htmlType={"submit"} type={"primary"}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
