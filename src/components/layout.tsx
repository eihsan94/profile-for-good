import React from "react";
import Nav from "./navbars";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div>
      <Nav />
      <div className="w-full flex justify-center items-center ">
        <div className="max-w-6xl">{children}</div>
      </div>
    </div>
  );
}
