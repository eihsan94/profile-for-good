import { Image } from "@nextui-org/react";
import React from "react";

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      className="rounded-none"
      width={30}
      height={30}
      alt="Logo"
    />
  );
}
