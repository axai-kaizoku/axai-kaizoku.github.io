"use client";

import { useEffect } from "react";

const ScrollDown = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const scrollDown = document.getElementById("scrollDownButton");
      if (scrollDown) {
        scrollDown.style.opacity = scroll > 100 ? "0" : "1";
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      aria-label="scroll down button"
      id="scrollDownButton"
      href="#currently_cooking"
      className="transition-all"
    >
      <div className="absolute bottom-8 right-8 sm:right-16 rounded-full bg-neutral-300  backdrop-blur-3xl  dark:bg-neutral-800 p-3 sm:p-4 transition-all  text-neutral-900 dark:text-neutral-50 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-down-icon lucide-chevron-down"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </a>
  );
};

export default ScrollDown;
