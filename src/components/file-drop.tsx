import { classNames } from "@/utils/classnames";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setFileData: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
}

export function FileDrop({ setFileData, setIsLoading, className }: Props) {
  const [isConverting, setIsConverting] = useState(false);
  const onDrop = useCallback(
    async (files: File[]) => {
      setIsLoading(true);
      setIsConverting(true);
      const fileDataPromises: Promise<string>[] = [];

      // Iterate over each file and create a Promise for each FileReader
      files.forEach((file) => {
        const reader = new FileReader();

        // Create a Promise that resolves when the reader finishes loading
        const promise = new Promise<string>((resolve) => {
          reader.onload = () => {
            resolve(reader.result as string);
          };
        });

        reader.readAsDataURL(file);

        fileDataPromises.push(promise);
      });

      // Wait for all promises to resolve
      const fileData = await Promise.all(fileDataPromises);
      console.log(fileData);

      // Set the image data to state
      setFileData(fileData);
      setIsLoading(false);
      setIsConverting(false);
    },
    [setFileData, setIsLoading]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={classNames(
        "cursor-pointer h-full flex justify-center items-center border-dashed border-2 border-gray-300 p-6 rounded-lg text-center",
        className || ""
      )}>
      <input
        {...getInputProps({
          accept: "image/*",
        })}
      />
      {isConverting ? (
        <p className="text-gray-600">
          <span className="animate-pulse">Uploading...</span>
        </p>
      ) : isDragActive ? (
        <p className="text-gray-600">Drop the file here ...</p>
      ) : (
        <p className="text-gray-600">
          Drag n drop any files (video, image, pdf) here, or click to select
          files
        </p>
      )}
    </div>
  );
}
