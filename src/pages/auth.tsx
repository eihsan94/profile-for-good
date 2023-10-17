import { Logo } from "@/components/logo";
import { Card } from "@nextui-org/react";
import { useEffect } from "react";

interface AuthProps {
  appID: string;
}

export default function Auth({ appID }: AuthProps) {
  useEffect(() => {
    require("@passageidentity/passage-elements/passage-auth");
  }, []);

  return (
    <div className="h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl flex flex-col lg:flex-row justify-center gap-16">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 text-center lg:text-start">
            Professional Profile Photos for the Underprivileged
          </h1>
          <Logo className="mt-6" />
        </div>
        <Card className="w-full">
          <passage-auth app-id={appID} />
        </Card>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      appID: process.env.PASSAGE_APP_ID,
    },
  };
}
