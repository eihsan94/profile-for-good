import React from "react";
import Nav from "./navbars";
import { useAuth } from "@/contexts/auth-context";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { isAuthorized } = useAuth();

  return (
    isAuthorized && (
      <div>
        <Nav />
        <div className="w-full flex justify-center items-center ">
          <div className="max-w-6xl">{children}</div>
        </div>
      </div>
    )
  );
}
