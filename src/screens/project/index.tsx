import { Link } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import { KanbanScreen } from "../Kanban";
import { EpicScreen } from "../epic";

export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={"kanban"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        <Route path={"kanban"} element={<KanbanScreen />}></Route>
        <Route path={"epic"} element={<EpicScreen />} />
        <Navigate to={"kanban"} />
      </Routes>
    </div>
  );
};
