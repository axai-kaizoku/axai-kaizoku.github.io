import { cn } from "@/lib/utils";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { cva } from "class-variance-authority";
import Link from "next/link";

const iconVariants = cva(
  "p-1 text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500",
  {
    variants: {
      size: {
        sm: "size-5",
        md: "size-6",
        lg: "size-[1.6rem] text-gray-300",
        xl: "size-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const Instagram = ({ classname }: { classname?: string }) => {
  return (
    <Link
      href="https://instagram.com/akshay_yelle"
      target="_blank"
      className={iconVariants()}
    >
      <SiInstagram className={cn("h-5 w-5", classname)} />
    </Link>
  );
};

export const Github = ({ classname }: { classname?: string }) => {
  return (
    <Link
      href="https://github.com/axai-kaizoku"
      target="_blank"
      className={iconVariants()}
    >
      <SiGithub className={cn("h-5 w-5", classname)} />
    </Link>
  );
};

export const LinkedIn = ({ classname }: { classname?: string }) => {
  return (
    <Link
      href="https://www.linkedin.com/in/akshay-yelle/"
      target="_blank"
      className={iconVariants()}
    >
      <SiLinkedin className={cn("h-5 w-5", classname)} />
    </Link>
  );
};

export const Twitter = ({ classname }: { classname?: string }) => {
  return (
    <Link href="https://x.com/akshay_yelle" target="_blank">
      <svg
        role="img"
        className={iconVariants({ size: "lg" })}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke={"currentColor"}
      >
        <title>X</title>
        <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
      </svg>
    </Link>
  );
};
