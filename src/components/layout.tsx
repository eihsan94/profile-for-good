import React, { useState } from "react";
import Nav from "./navbars";
import { Sidebar } from "./sidebar";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      {/* <Nav /> */}
      <div className="max-w-6xl">{children}</div>
    </div>
  );
}
