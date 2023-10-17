import { classNames } from "@/utils/classnames";
import { Image } from "@nextui-org/react";
import React from "react";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      className={classNames("rounded-none", className || "")}
      width={30}
      height={30}
      alt="Logo"
    />
  );
}
