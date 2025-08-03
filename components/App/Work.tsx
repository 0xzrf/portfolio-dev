"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useRouter } from "next/navigation";

const RustProjects = [
  {
    title: "Terminal shell",
    heading: "CLI tool",
    description: "A terminal shell writted in Rust with functionalities similar to actual terminal shells.",
    link: "https://github.com/0xzrf/Rust-programs/tree/main/shell",
    tags: ["Rust", "CLI", "Solana"],
  },
  {
    title: "Bonding curve AMM",
    description: "A bonding curve built on Solana with automated interest rate adjustment and collateral management. It is a type of Automated Market Maker (AMM) that allows users to buy and sell tokens at a price that is determined by the bonding curve.",
    link: "https://github.com/0xzrf/Bonding-curve-program",
    tags: ["Rust", "DeFi", "Solana", "AMM"],
    heading: "Smart Contract",
  },
  {
    title: "Rust Programs",
    description: "A collection of Rust programs that I have written for learning purposes.",
    link: "https://github.com/0xzrf/Rust-programs",
    tags: ["Rust", "CLI"],
    heading: "CLI tools",
  }
];

function Work() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const router = useRouter();

  return (
    <div className="w-full h-full ml-0 md:ml-[5.5rem] pt-20">
      {/* Enhanced Header Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="relative">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl rounded-full"></div>

          {/* Main content */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Portfolio</span>
            </div>

            <h2 className="text-3xl md:text-6xl font-bold font-serif text-white mb-4 leading-tight">
              Recent{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>

            <h3 className="text-lg md:text-xl font-medium text-gray-300 max-w-2xl leading-relaxed">
              Explore my latest projects and innovations. Click on any card to dive deeper into the details.
            </h3>

            {/* Stats section */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">6 Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">AI/Web3 Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">Interactive Demos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Overview Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-zinc-900/50 via-zinc-800/50 to-zinc-900/50 rounded-3xl p-8 border border-zinc-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">Experience Overview</span>
          </div>

          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-orange-300 mb-3">Rust & Solana Development</h4>
              <p className="text-gray-300 leading-relaxed">
                Extensive experience in Rust programming and Solana smart contract development
                Built multiple DeFi protocols, NFT marketplaces, and blockchain infrastructure tools. 
                Specialized in performance optimization and security best practices for blockchain applications. <br/>
                I've also contributed in open source projects like <a href="https://github.com/solana-developers/program-examples" className="text-blue-400">Solana program examples</a>.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">Rust</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">Solana</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">Smart Contracts</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">DeFi</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-300 mb-3">Full-Stack Development</h4>
              <p className="text-gray-300 leading-relaxed">
                Proficient in modern web technologies with focus on AI integration and Web3 applications.
                Experience building scalable applications with React, Next.js, and various backend technologies.
                Strong emphasis on user experience and performance optimization.<br/>
                I've also contributed in open source projects like <a href="https://github.com/Lewarn00/supersize-solana" className="text-blue-400">Supersize.gg</a> 
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">React</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">AI/ML</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Web3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rust & Solana Projects Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
            <span className="text-red-400 font-medium text-sm uppercase tracking-wider">Rust & Solana</span>
          </div>

          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Blockchain Projects
            </span>
          </h3>

          <p className="text-gray-300 text-lg max-w-3xl">
            A collection of Rust-based projects and Solana smart contracts showcasing expertise in blockchain development,
            DeFi protocols, and secure smart contract implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Rust Project 1 */}
          {
            RustProjects.map((project) => {
              return (
                <div onClick={() => router.push(project.link)} className="bg-gradient-to-br hover:cursor-pointer from-red-900/50 via-red-800/50 to-orange-900/50 rounded-2xl p-6 border border-red-700/50 hover:border-red-600/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-red-300 text-sm font-medium">{project.heading}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                    <div className="flex flex-wrap gap-2">
                      {
                        project.tags.map((tag) => {
                          return (
                            <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">{tag}</span>
                          )
                        })
                      }
                  </div>
                </div>
              )
            })
          }

     
        </div>
      </div>

      <Carousel items={cards} />
    </div>
  );
}

export default Work;
const DummyContent = ({ link, GhLink, description, vidLink }: { vidLink: string, description: any, link?: string, GhLink: string }) => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 w-full h-full rounded-3xl mb-4 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-zinc-700/50 backdrop-blur-sm"
      >
        <div className="p-8">
          <div className="mb-8">
            {description}
          </div>

          {/* Enhanced Links Section */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-8">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}

            <a
              href={GhLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
          </div>

          {/* Enhanced Video Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <h2 className="text-xl font-semibold text-white">Demo Video</h2>
            </div>
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-zinc-600/50">
              <video
                src={vidLink}
                className="absolute top-0 left-0 w-full h-full object-cover"
                loop
                muted
                autoPlay
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
type Card = {
  src: string;
  title: any;
  category: string;
  content: React.ReactNode;
  vidLink?: string;
};

const data: Card[] = [
  {
    category: "AI/Web3",
    title: <h1 className="text-white font-bold text-2xl">Gryffin</h1>,
    src: "https://res.cloudinary.com/dzt9djtum/image/upload/v1754206389/Screenshot_2025-08-03_at_1.02.54_PM_pclh0w.png",
    vidLink: "https://res.cloudinary.com/dzt9djtum/video/upload/v1754206156/demo_kufuiw.mp4",
    content: <DummyContent
      description={
        <div>
          <div className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-xl p-6 shadow-lg border border-zinc-700/50">
            <h1 className="text-white font-extrabold text-3xl mb-3 flex items-center gap-2">
              Gryffin
              <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse">AI IDE</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Gryffin is an <span className="text-blue-400 font-semibold">AI-powered, web-based IDE</span> designed to help you write Solana smart contracts <span className="text-green-400 font-semibold">faster</span> and <span className="text-green-400 font-semibold">safer</span>.
              <br />
              With <span className="text-purple-400 font-semibold">intelligent code suggestions</span> and <span className="text-purple-400 font-semibold">built-in security checks</span>, Gryffin streamlines the development process for Solana developers.
            </p>
            <div className="mb-2">
              <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Achievements
              </h2>
              <ul className="space-y-3 pl-4">
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="font-medium text-blue-200">Won a grant of <span className="font-bold text-green-300">$8,000</span> by Solana X CoinDCX</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="font-medium text-blue-200">Selected for the exclusive <span className="font-bold text-yellow-300">Breakout Batch</span> by Superteam India</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="font-medium text-blue-200">Finalist in the <span className="font-bold text-pink-300">Soonami web3</span> funding round</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="font-medium text-blue-200">Used by <span className="font-bold text-green-300">10+ developers</span>, with <span className="font-bold text-green-300">12 Solana smart contracts</span> shipped so far</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
      link={"https://main.gryffin.pages.dev/"}
      vidLink="https://res.cloudinary.com/dzt9djtum/video/upload/v1754206156/demo_kufuiw.mp4"
      GhLink={"https://github.com/0xzrf/gryffin"}
    />,
  },
  {
    category: "Web3/Blink",
    title: <h1 className="text-white font-bold text-2xl">BountySpread</h1>,
    src: "https://d70djocle7hv2.cloudfront.net//uploads/17/0.07752762384275669/image.jpg",
    vidLink: "https://res.cloudinary.com/dlpeakxzf/video/upload/v1726667082/Recording_2024-09-18_191402_v66g43.mp4",
    content: <DummyContent
      description={
        <div>
          <div className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-xl p-6 shadow-lg border border-zinc-700/50">
            <h1 className="text-white font-extrabold text-3xl mb-3 flex items-center gap-2">
              BountySpread
              <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse">DeFi Platform</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              BountySpread helps to create <span className="text-green-400 font-semibold">Solana blinks</span> out of crypto bounties. Integrated with <span className="text-blue-400 font-semibold">escrow Rust implementation</span> for winners' fund transfer. Also custom data endpoint integration is facilitated.
            </p>
            <div className="mb-2">
              <h2 className="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Achievements
              </h2>
              <ul className="space-y-3 pl-4">
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="font-medium text-green-200">Won the <span className="font-bold text-yellow-300">Mercuryo Side track</span> in the Radar Hackathon</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="font-medium text-green-200">Won a Hackathon and Solana X CoinDCX grant of <span className="font-bold text-green-300">$1,500</span> by superteam</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="font-medium text-green-200">Became a <span className="font-bold text-blue-300">Superteam India Member</span> afterwards</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="font-medium text-green-200">Custom data endpoint integration is facilitated</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
      link={"https://bountyspread.cc/"}
      vidLink="https://res.cloudinary.com/dlpeakxzf/video/upload/v1726667082/Recording_2024-09-18_191402_v66g43.mp4"
      GhLink={"https://github.com/0xzrf/Bounty-Spread"}
    />,
  },
  {
    category: "DeFi/Token",
    title: <h1 className="text-white font-bold text-2xl">Token Launchpad</h1>,
    src: "https://d70djocle7hv2.cloudfront.net//uploads/17/0.013630050966400908/image.jpg",
    vidLink: "https://res.cloudinary.com/dlpeakxzf/video/upload/v1726667691/Recording_2024-09-18_192423_usqqg9.mp4",
    content: <DummyContent
      description={
        <div>
          <div className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-xl p-6 shadow-lg border border-zinc-700/50">
            <h1 className="text-white font-extrabold text-3xl mb-3 flex items-center gap-2">
              Token Launchpad
              <span className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse">Token Platform</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Created a <span className="text-orange-400 font-semibold">Token minting platform</span> to let users mint their own tokens in minutes. Streamlined the process of token creation with an intuitive interface and robust backend infrastructure.
            </p>
            <div className="mb-2">
              <h2 className="text-xl font-bold text-orange-300 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Key Features
              </h2>
              <ul className="space-y-3 pl-4">
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span className="font-medium text-orange-200">Quick token minting process</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span className="font-medium text-orange-200">User-friendly interface</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span className="font-medium text-orange-200">Robust backend infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span className="font-medium text-orange-200">Secure token creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
      vidLink="https://res.cloudinary.com/dlpeakxzf/video/upload/v1726667691/Recording_2024-09-18_192423_usqqg9.mp4"
      GhLink="https://github.com/0xzrf/landing-page-boilerplate"
    />,
  },

  {
    category: "Web3/Wallet",
    title: <h1 className="text-white font-bold text-2xl">Vimpt</h1>,
    vidLink: "https://res.cloudinary.com/dr1by5yuc/video/upload/v1726687891/WALLET_lcyudk.mp4",
    src: "https://d70djocle7hv2.cloudfront.net//uploads/17/0.5012280725247149/image.jpg",
    content: <DummyContent
      description={
        <div>
          <div className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-xl p-6 shadow-lg border border-zinc-700/50">
            <h1 className="text-white font-extrabold text-3xl mb-3 flex items-center gap-2">
              Vimpt
              <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse">Wallet Tool</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              A project that lets users create their wallets from a <span className="text-emerald-400 font-semibold">seed phrase</span>, and create as many <span className="text-teal-400 font-semibold">Solana wallets</span> from that single seed phrase. Streamlined wallet management for developers and users.
            </p>
            <div className="mb-2">
              <h2 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Key Features
              </h2>
              <ul className="space-y-3 pl-4">
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="font-medium text-emerald-200">Seed phrase wallet generation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="font-medium text-emerald-200">Multiple wallet creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="font-medium text-emerald-200">Solana blockchain integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="font-medium text-emerald-200">Secure wallet management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
      GhLink="https://github.com/0xzrf/Token-Creation"
      vidLink={"https://res.cloudinary.com/dr1by5yuc/video/upload/v1726687891/WALLET_lcyudk.mp4"}
      link={""}
    />,
  }
];
