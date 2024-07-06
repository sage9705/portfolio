import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <span>
        <Link
          href={"/"}
        >
          <Image
              src="/images/logo.jpg"
              alt="logo"
              className="rounded-[50%]"
              width={40}
              height={40}
            />
        </Link>
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
