/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Form, Input, Select } from "antd";
import { Project } from "./list";
import { UserSelect } from "../../components/user-select";

export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}
interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}
export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form css={{ marginBottom: "2rem" }} layout={"inline"}>
      <Form.Item>
        {/*setParam(Object.assign({}, param, {name:evt.target.value}))*/}
        <Input
          type="text"
          placeholder={"项目名"}
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        />
        {/*<Select*/}
        {/*  value={param.personId}*/}
        {/*  onChange={(value) =>*/}
        {/*    setParam({*/}
        {/*      ...param,*/}
        {/*      personId: value,*/}
        {/*    })*/}
        {/*  }*/}
        {/*>*/}
        {/*  <Select.Option value={""}>负责人</Select.Option>*/}
        {/*  {users.map((user) => (*/}
        {/*    <Select.Option key={user.id} value={user.id}>*/}
        {/*      {user.name}*/}
        {/*    </Select.Option>*/}
        {/*  ))}*/}
        {/*</Select>*/}
      </Form.Item>
    </Form>
  );
};
