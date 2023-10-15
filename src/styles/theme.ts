import { NextUIPluginConfig } from "@nextui-org/react";

export const theme: NextUIPluginConfig = {
  layout: {
    radius: {
      medium: "100px", // rounded-medium
    },
  },
  themes: {
    light: {
      colors: {
        background: "#FFFFFF", // or DEFAULT
        foreground: "#11181C", // or 50 to 900 DEFAULT
        primary: {
          // make the primary color to be black
          DEFAULT: "black",
        },
      },
    },
  },
};
