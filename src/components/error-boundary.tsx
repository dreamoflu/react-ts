import React, { ReactNode } from "react";

type fallbackRender = (props: { error: Error | null }) => React.ReactElement;
// export class ErrorBoundary extends React.Component<
//   { child: ReactNode; fallbackRender: fallbackRender },
//   { error: Error | null }
// > {}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: fallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };
  // 当子组件抛出异常，这里会接收到并且调用
  static getDeriverStateFromError(error: Error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
