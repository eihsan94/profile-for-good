import { ImageDrop } from "@/components/image-drop";
import { Layout } from "@/components/layout";
import { SSRAuthGuard } from "@/server-utils/isAuth.utils";
import { Button, Card, Image, Navbar, Spinner } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Home({ isAuthorized }: { isAuthorized: boolean }) {
  const [imageBin, setImageBin] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isImageBinNotEmpty = imageBin.length > 0;
  const router = useRouter();
  useEffect(() => {
    if (!isAuthorized) {
      router.push("/auth");
    }
  }),
    [isAuthorized];

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl pt-10 font-bold">Upload your photos</h1>
        <div className="mt-10 grid grid-cols-12 gap-4 h-[400px] lg:h-[400px] px-4 lg:px-0">
          <ImageDrop
            setIsLoading={setIsLoading}
            setFileData={setImageBin}
            className="col-span-12 lg:col-span-6"
          />
          <div className="border col-span-12 lg:col-span-6 h-full overflow-auto">
            <div className="p-2 flex justify-center font-bold ">
              Selected Photos will be shown here
            </div>
            <div className="flex flex-wrap gap-6 p-4 justify-center h-full">
              {isLoading && <Spinner />}
              {imageBin.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={image}
                  className="object-cover h-[150px] w-[100px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isImageBinNotEmpty && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="border fixed bottom-0 left-0 w-full h-fit z-10">
            <Navbar className="border">
              <div className="flex-grow">
                Total Image Selected: {imageBin.length}
              </div>
              <Button color="primary">Proceed</Button>
            </Navbar>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await SSRAuthGuard(context);
}
