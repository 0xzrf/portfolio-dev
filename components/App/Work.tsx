"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";


function Work() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
 
  return (
    <div className="w-full h-full ml-0 md:ml-[5.5rem] pt-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold font-serif text-white">
        Recent Works
      </h2>
      <h3 className="max-w-7xl pl-4 mx-auto font-medium font-serif text-gray-300">
        Click on a card to know more about the project
      </h3>
      <Carousel items={cards} />
    </div>
  );
}

export default Work;
const DummyContent = ({link, GhLink, description, vidLink}: {vidLink: string,description: string, link?: string, GhLink: string}) => {
  return (
    <>
     
          <div
            key={"dummy-content"}
            className="bg-zinc-900 w-full h-full rounded-3xl mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-gray-300 text-base md:text-xl font-sans max-w-3xl mb-6 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center mb-6">
             {link && <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-2 md:mb-0"
              >
                Live Demo
              </a>}
              <a
                href={GhLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-200 flex items-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub Repository
              </a>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-white mb-4">Demo Video</h2>
              <div className="relative pt-[56.25%]">
                <iframe
                  src={vidLink}
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
    </>
  );
};
 
const data = [
  {
    category: "",
    title: "",
    src: "https://d70djocle7hv2.cloudfront.net//uploads/17/0.7902439978026092/image.jpg",
    content: <DummyContent description="A platform where user stake their sol to improve their Solgotchis!! Staking is gamified in order to encourage users to stake more and hence make the solana ecosystem even strong" vidLink="https://res.cloudinary.com/dr1by5yuc/video/upload/v1726685762/SOLGOTCHI_z44swo.mp4" link={"https://solgotchi-dun.vercel.app/"} GhLink={"https://github.com/krishhh16/Solgotchi"} />,
  },
  {
    category:"",
    title: "",
    src: "https://d70djocle7hv2.cloudfront.net//uploads/17/0.07752762384275669/image.jpg",
    content: <DummyContent  description="Helps to create solana blinks out of crypto bounties. Integrated with escrow rust implemmentation for winners' fund transfer.Also custom data endpoint integration is facilitated." link={"https://bountyspread.cc/"} vidLink="https://res.cloudinary.com/dlpeakxzf/video/upload/v1726667082/Recording_2024-09-18_191402_v66g43.mp4" GhLink={"https://github.com/krishhh16/Bounty-Spread"}/>,
  },
  {
    category: "",
    title: "",
    src: "https://d70djocle7hv2.cloudfront.net//uploads/17/0.013630050966400908/image.jpg",
    content: <DummyContent description="Created a Token minting platform to let users mint their own token in minutes" vidLink="https://res.cloudinary.com/dlpeakxzf/video/upload/v1726667691/Recording_2024-09-18_192423_usqqg9.mp4" GhLink="https://github.com/krishhh16/landing-page-boilerplate"/>,
  },
  {
    category: "",
    title: "",
    src: "https://d70djocle7hv2.cloudfront.net//uploads/27/0.9723566942446507/image.jpg",
    content: <DummyContent  description="Experimented with framer & other UI enhancing libraries" vidLink="https://res.cloudinary.com/dr1by5yuc/video/upload/v1726684391/Refokus_h8beg9.mp4" GhLink="https://github.com/krishhh16/landing-page-boilerplate"/>,
  },
  {
    category: "",
    title: "",
    src: "https://d70djocle7hv2.cloudfront.net//uploads/17/0.5012280725247149/image.jpg",
    content: <DummyContent GhLink="https://github.com/krishhh16/Token-Creation" vidLink={"https://res.cloudinary.com/dr1by5yuc/video/upload/v1726687891/WALLET_lcyudk.mp4"} description="A project that let's user create their wallets from a seed phrase, and create as many Solana wallets from that single seed phrase"  link={""}/>,
  }
];
