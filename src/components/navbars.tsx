import { PassageUser } from "@passageidentity/passage-elements/passage-user";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { Logo } from "./logo";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/router";

export default function Nav() {
  const { isAuthorized } = useAuth();
  const [user, setUser] = useState<PassageUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (isAuthorized) {
      const passageUserInstance = new PassageUser();
      setUser(passageUserInstance);
    }
  }, [isAuthorized]);

  const [loadingSignOut, setLoadingSignOut] = useState(false);
  const signOut = async () => {
    setLoadingSignOut(true);
    await user?.signOut();
    router.push("/");
    setLoadingSignOut(false);
  };
  return (
    <Navbar className="border-b-1 border-gray-150">
      <NavbarBrand as={Link} href="/"></NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"></NavbarContent>
    </Navbar>
  );
}
