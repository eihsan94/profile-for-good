// import { classNames } from "@/utils/classnames";
// import { APP_CONFIGS } from "@/configs/configs";
// import { Logo } from "./logo";
// import { Button, Textarea } from "@nextui-org/react";

// export function SidebarMenu({
//   className,
// }: {
//   className?: string;
// }): JSX.Element {
//   const uploadHandler = () => {
//     alert("upload");
//   };

//   return (
//     <div
//       className={classNames(
//         "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4",
//         className || ""
//       )}>
//       <div className="flex h-16 shrink-0 items-center">
//         <Logo />
//         <div className="ml-3 text-xl leading-7 text-gray-900 font-semibold">
//           {APP_CONFIGS.appName}
//         </div>
//       </div>
//       <nav className="flex flex-1 flex-col">
//         <ul className="flex flex-1 flex-col gap-y-7">
//           <li>
//             <ul className="-mx-2 space-y-1">
//               <Button
//                 color="primary"
//                 onClick={uploadHandler}
//                 className="w-full">
//                 Upload
//               </Button>
//             </ul>
//           </li>

//           <li className="mt-auto">
//             <Textarea
//               isRequired
//               label="Instructions"
//               labelPlacement="outside"
//               placeholder="Enter your description"
//             />
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

import { classNames } from "@/utils/classnames";
import { APP_CONFIGS } from "@/configs/configs";
import { Logo } from "./logo";
import { Button, Textarea } from "@nextui-org/react";
import { FileDrop } from "./file-drop";
import { useState } from "react";
import Image from "next/image";

export function SidebarMenu({
  className,
}: {
  className?: string;
}): JSX.Element {
  const uploadHandler = () => {
    alert("upload");
  };
  const [fileBin, setFileBin] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      className={classNames(
        "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4",
        className || ""
      )}>
      <div className="flex h-16 shrink-0 items-center">
        <Logo />
        <div className="ml-3 text-xl leading-7 text-gray-900 font-semibold">
          {APP_CONFIGS.appName}
        </div>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2 space-y-1">
              <FileDrop
                setIsLoading={setIsLoading}
                setFileData={setFileBin}
                className="h-64 w-full"
              />
            </ul>
          </li>
          <li>
            {fileBin.length > 0 && (
              <p className="text-xl mb-4 font-bold">Uploaded files:</p>
            )}
            <div className="max-h-64 overflow-auto p-4 border rounded-lg flex flex-col gap-2">
              {fileBin.map((file, i) => (
                <ul key={i} className="-mx-2 space-y-1">
                  <Image
                    alt={"image"}
                    src={file}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                </ul>
              ))}
            </div>
          </li>

          <li className="mt-auto">
            <Textarea
              isRequired
              label="Instructions"
              labelPlacement="outside"
              placeholder="Enter your description"
            />
            <Button
              disabled={fileBin.length === 0 || isLoading}
              color="primary"
              onClick={uploadHandler}
              className="w-full mt-4">
              Generate Mindmap
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
