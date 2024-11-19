import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { LinkPreview } from "@/components/ui/link-preview";
import {  Github } from "lucide-react";

export function Experience() {
  const data = [
    {
      title: "May 2023 - Dec 2023",
      content: (
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Freelance AI Automation Developer
          </h1>
          <ul className="list-disc space-y-4 list-inside leading-[2.5vh] text-white text-xs md:text-sm font-normal mb-8">
            <li>Working as a freelance AI Automation developer and building AI-based tools and software in AAA business model specifically.</li>
            <li>Built different Chatbots (internal and external) in collaboration with other developers with the help of Open AI's API.</li>
            <li>Used GPT-4's abilities to build highly interactive chatbots and internal tools.</li>
            <li>Worked with over <span className="font-bold text-blue-500">15+ clients remotely</span> from different countries and timezone difference from mine</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Aug 2023 - Dec 2023",
      content: (
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            AI Automation Developer @SynergERP
          </h1>
          <ul className="list-disc list-inside space-y-6 leading-[2.5vh] text-white text-xs md:text-sm font-normal mb-8">
            <li>Working as an AI developer to help businesses automate tasks through the latest technologies such as AI.</li>
            <li>Built AI tools for the company to automate some of their tasks using tools like pappeteer and more</li>
            <li>Integrated softwares using node js and python for backend development</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Dec 2023 - Mar 2024",
      content: (
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Full Stack Engineer @Neural Web
          </h1>
          <ul className="list-disc list-inside space-y-6 leading-[2.5vh] text-white text-xs md:text-sm font-normal mb-8">
            <li>DevOps heavy work to deploy AI in a scalable manner.</li>
            <li>Building client-facing websites.</li>
            <li>Learnt a lot about website responsiveness and animations</li>
          </ul>
        </div>
      ),
    },
    {
      title: "March 2024 - Currently",
      content: (
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Upskilling and Freelancing
          </h1>
          <ul className="list-disc list-inside text-white space-y-6  leading-[2.5vh] text-xs md:text-sm font-normal mb-2">
            <li>Upskilling and Freelancing, building projects in various technologies such as AI and Web3 which I learnt through books and courses</li>
          </ul>
            <span><LinkPreview url="https://github.com/0xzrf" className="font-bold flex text-white gap-2">
               Checkout my <Github />
            </LinkPreview></span>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
