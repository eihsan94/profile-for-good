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
      <NavbarBrand as={Link} href="/">
        <Logo />
        <h1 className="ml-2 lg:ml-4 text-lg lg:text-3xl font-semibold text-inherit">
          Profile For Good
        </h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Success Stories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Our Mission
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {isAuthorized ? (
          <NavbarItem>
            <Button isLoading={loadingSignOut} onClick={signOut}>
              Sign Out
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button as={Link} color="primary" href="/auth">
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
