'use client';
import React, { useTransition, useState } from "react";
import TabButton from "./tabbutton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "Node.js", "Express", "PostgreSQL", "MongoDB", "SQL", "Next.js",
      "React", "Angular", "JavaScript", "TypeScript", "C", "C++",
      "C#", "Python", "PHP", "Java"
    ]
  },
  {
    title: "Education",
    id: "education",
    content: [
      "B.A Philosophy & Information Science",
      "University of Ghana"
    ]
  },
  {
    title: "Certifications",
    id: "certifications",
    content: []
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const renderContent = (content) => {
    if (content.length === 0) {
      return null; 
    }

    return (
      <ul className={tab === 'skills' ? "flex flex-wrap mx-2" : "pl-6"}>
        {content.map((item, index) => (
          <li key={index} className={tab === 'skills' ? "px-2 w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-2" : "mb-2"}>
            <span className="flex items-center">
              <span className="mr-2 text-green-500">&#8226;</span>
              {item}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="text-white" id="about">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* <div className="w-full md:w-1/2 h-auto aspect-square relative">
            <Image 
              src="/images/about-image.jpg" 
              layout="fill"
              objectFit="cover"
              alt="About me"
              className="rounded-lg"
            />
          </div> */}
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-base sm:text-lg mb-6">
              I'm self-taught software engineer, fullstack developer, data scientist, data analyst and a trained data engineer.
              I have a strong passion for creating interactive and responsive web applications as well as developing systems and applications.
              I am always looking to expand my knowledge and skill set.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {TAB_DATA.map((tabItem) => (
            TAB_DATA.find((t) => t.id === tabItem.id).content.length > 0 && (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            )
          ))}
        </div>
        <div className="mt-4">
          {renderContent(TAB_DATA.find((t) => t.id === tab).content)}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
