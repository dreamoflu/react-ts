import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce } from "../../utils";
// import * as qs from "qs";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";

// const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 1000);
  const [list, setList] = useState([]);
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useEffect(() => {
    client("users").then(setUsers);
  }, []);

  return (
    <div>
      <Container>
        <h1>项目列表</h1>
        <SearchPanel users={users} param={param} setParam={setParam} />
        <List users={users} list={list} />
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
