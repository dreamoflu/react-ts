import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

interface ChildProps {
  children: ReactNode;
}
export const AppProviders = ({ children }: ChildProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
