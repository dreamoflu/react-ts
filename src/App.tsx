import React from "react";
// import logo from "logo.svg";
import "./App.css";
// import { ProjectListScreen } from "./screens/project-list";

// import { TsReactTest } from "./try-use-array";
import { UnauthenticatedApp } from "./unauthenticated-app";
import { useAuth } from "./context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/*<TsReactTest />*/}
      {/*<ProjectListScreen />*/}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
