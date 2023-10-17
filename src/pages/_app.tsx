import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/auth-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <AuthProvider
        isAuthorized={pageProps.isAuthorized}
        appID={pageProps.appID}>
        <Component {...pageProps} />
      </AuthProvider>
    </NextUIProvider>
  );
}
