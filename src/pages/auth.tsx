import { Logo } from "@/components/logo";
import { Card } from "@nextui-org/react";
import { useEffect } from "react";

export default function Auth() {
  useEffect(() => {
    require("@passageidentity/passage-elements/passage-auth");
  }, []);

  return (
    <div className="h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl flex flex-col lg:flex-row justify-center gap-16">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Professional Profile Photos for the Underprivileged
          </h1>
          <Logo className="mt-6" />
        </div>
        <Card className="w-full">
          <passage-auth app-id={process.env.NEXT_PUBLIC_PASSAGE_APP_ID} />
        </Card>
      </div>
    </div>
  );
}
