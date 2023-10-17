import Nav from "@/components/navbars";
import { SSRAuthGuard } from "@/server-utils/isAuth.utils";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button, Chip, Image } from "@nextui-org/react";
import Passage from "@passageidentity/passage-node";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center pb-4">
        <div className="relative isolate px-4 pt-8 lg:pt-12 lg:px-8 max-w-6xl">
          <div className="text-center">
            <Chip
              size="sm"
              className="uppercase mb-4 lg:mb-6 bg-blue-100 text-blue-500 text-[10px] lg:text-medium">
              We are here to help you get back to the community
            </Chip>
            <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900">
              Professional Profile Photos for the Underprivileged
            </h1>
            <p className="mt-6 text-sm leading-6 lg:text-2xl lg:leading-8 opacity-80">
              Our mission is to level the playing field. Regardless of financial
              constraints, we believe everyone from marginalized or
              underrepresented communities deserves to present themselves in the
              best light for job applications, social networking, and beyond.
            </p>
            <div className="mt-6 flex items-center justify-center lg:mt-8">
              <Button color="primary" as={Link} href="/home">
                Create yours now
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-14 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
          <Image
            src="/willsmith-poor.jpg"
            alt="/willsmith-poor.jpg"
            width={300}
            height={300}
            className="object-cover h-56 w-56 lg:h-72 lg:w-64"
          />
          <ArrowRightIcon className="w-8 h-8 lg:w-10 lg:h-10 text-gray-900 sm:block hidden" />
          <ArrowDownIcon className="w-8 h-8 lg:w-10 lg:h-10 text-gray-900 block sm:hidden" />
          <Image
            src="/willsmith-rich.jpg"
            alt="/willsmith-rich.jpg"
            width={300}
            height={300}
            className="object-cover h-56 w-56 lg:h-72 lg:w-64"
          />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await SSRAuthGuard(context);
}
