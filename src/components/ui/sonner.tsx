"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { Toaster as HotToaster } from "react-hot-toast";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export const variantColors = {
  error: { bgColor: "#F8E2E2", textColor: "#D03838" },
  success: { bgColor: "#D6F2E3", textColor: "#13955E" },
  info: { bgColor: "#E8F0FF", textColor: "#0054DC" },
};

const toastStyle =
  "!shadow-none p-[0.375rem] rounded-[0.625rem] text-[0.625rem] mb-3 md:text-sm md:font-medium md:px-8 md:py-[14px]";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <>
      <Sonner
        theme={theme as ToasterProps["theme"]}
        className="toaster group"
        toastOptions={{
          classNames: {
            toast:
              "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-muted-foreground",
            actionButton:
              "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton:
              "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          },
        }}
        {...props}
      />
      <HotToaster
        containerStyle={{ zIndex: 99999 }}
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            maxWidth: "500px",
          },
          success: {
            className: `${toastStyle}`,
            style: {
              background: `${variantColors.success.bgColor}`,
              color: `${variantColors.success.textColor}`,
            },
          },
          custom: {
            className: `${toastStyle}`,
            style: {
              background: `${variantColors.info.bgColor}`,
              color: `${variantColors.info.textColor}`,
            },
          },
          error: {
            className: `${toastStyle}`,
            style: {
              background: `${variantColors.error.bgColor}`,
              color: `${variantColors.error.textColor}`,
            },
          },
        }}
      />
    </>
  );
};

export { Toaster };
