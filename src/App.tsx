import React from "react";
// import logo from "logo.svg";
import "./App.css";
// import { ProjectListScreen } from "./screens/project-list";

// import { TsReactTest } from "./try-use-array";
import { UnauthenticatedApp } from "./unauthenticated-app";
import { useAuth } from "./context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";
import { ErrorBoundary } from "./components/error-boundary";
import { FullPageErrorFallback } from "./components/lib";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/*<TsReactTest />*/}
      {/*<ProjectListScreen />*/}
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
