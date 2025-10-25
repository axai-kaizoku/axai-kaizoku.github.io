import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <div className="font-mono text-4xl lg:text-6xl 2xl:text-8xl text-center min-h-[calc(100vh-100px)]">
      Blog.
      <span className="text-base">[In progress]</span>
    </div>
  );
}
