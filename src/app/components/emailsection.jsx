"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/images/github.svg";
import LinkedinIcon from "../../../public/images/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === "Message Sent") {
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("There was an error sending the message:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className=""></div>
      <div className="z-10 flex-1">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/sage9705"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github Icon" height={30} width={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/edem-kumahor-1995aa141"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              height={30}
              width={30}
            />
          </Link>
        </div>
      </div>
      <div className="z-10 flex-1">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#4ce6de] border border-[#33353F] placeholder-[#0d0f0f] text-slate-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="job@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#4ce6de] border border-[#33353F] placeholder-[#0d0f0f] text-slate-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="Hello there!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#4ce6de] border border-[#33353F] placeholder-[#0d0f0f] text-slate-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="Message..."
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </section>
  );
};

export default EmailSection;
