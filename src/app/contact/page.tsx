import ContactForm from "./_components/contact-form";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-100px)] w-full">
      <ContactForm />
      {/* <div className=" mt-6 text-center text-sm text-gray-500">
        <p className="my-3">OR</p>
        <p>
          Contact directly:{" "}
          <Link
            href="mailto:akshayyelle6@gmail.com"
            className="underline text-[#10b981] hover:text-[#047857]"
          >
            akshayyelle6@gmail.com
          </Link>
        </p>
      </div> */}
    </div>
  );
}
