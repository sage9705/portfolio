import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/images/github.svg";
import LinkedinIcon from "../../../public/images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center py-4 px-4 text-white">
      <div className="flex items-center mt-4 mb-4">
        <div className="text-center ml-4">Godwin Edem Kumahor</div>
      </div>
      <div className="flex justify-center gap-4">
        <Link
          href="https://github.com/sage9705"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/edem-kumahor-1995aa141"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
        </Link>
      </div>
      <p className="text-center mt-4">© All rights reserved.</p>
    </footer>
  );
};

export default Footer;
