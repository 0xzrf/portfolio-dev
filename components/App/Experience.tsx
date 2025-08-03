import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { LinkPreview } from "@/components/ui/link-preview";
import { Github, Calendar, MapPin, Building } from "lucide-react";

export function Experience() {
  const data = [
    {
      title: "May 2023 - Dec 2023",
      company: "Freelance",
      location: "Remote",
      role: "AI Automation Developer",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                AI Automation Developer
              </h1>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>May 2023 - Dec 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Remote</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
            <ul className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Working as a freelance AI Automation developer and building AI-based tools and software in AAA business model specifically.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built different Chatbots (internal and external) in collaboration with other developers with the help of Open AI's API.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Used GPT-4's abilities to build highly interactive chatbots and internal tools.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Worked with over <span className="font-bold text-blue-400">15+ clients remotely</span> from different countries and timezone difference from mine</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2023 - Dec 2023",
      company: "SynergERP",
      location: "Remote",
      role: "AI Automation Developer",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                AI Automation Developer @SynergERP
              </h1>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Aug 2023 - Dec 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Remote</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
            <ul className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Working as an AI developer to help businesses automate tasks through the latest technologies such as AI.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built AI tools for the company to automate some of their tasks using tools like pappeteer and more</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Integrated softwares using node js and python for backend development</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2023 - Mar 2024",
      company: "Neural Web",
      location: "Remote",
      role: "Full Stack Engineer",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Full Stack Engineer @Neural Web
              </h1>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 2023 - Mar 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Remote</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
            <ul className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>DevOps heavy work to deploy AI in a scalable manner.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Building client-facing websites.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Learnt a lot about website responsiveness and animations</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "March 2024 - Currently",
      company: "Freelance",
      location: "Remote",
      role: "Upskilling and Freelancing",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Upskilling and Freelancing
              </h1>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>March 2024 - Currently</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Remote</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
            <ul className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Upskilling and Freelancing, building projects in various technologies such as AI and Web3 which I learnt through books and courses</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <LinkPreview url="https://github.com/0xzrf" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 border border-zinc-600/50">
                <Github className="w-4 h-4" />
                <span>Checkout my GitHub</span>
              </LinkPreview>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2024 - Dec. 2024",
      company: "Supersize.gg",
      location: "Remote",
      role: "Web3 Developer",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Web3 Developer @Supersize.gg
              </h1>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Nov 2024 - Dec. 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Remote</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
            <ul className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Worked on Front-end integrations and backend.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Worked with Jupiter API to build the swap functionality.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Used on-chain data to represent data on the frontend.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2024 - Dec. 2024",
      company: "Freelance",
      location: "Remote",
      role: "Blockchain Developer",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Blockchain Developer (ETH and SOL)
              </h1>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Nov 2024 - Dec. 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Remote</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
            <ul className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built scripts to moniter account transactions.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built charts using apis from trading platforms like Pump.fun and Geckoterminal.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built highly tested smart contracts in both Solidity(Foundry) and Rust(Anchor).</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2025 - March 2024",
      company: "GreenKWH(Radar DePIN winner)",
      location: "Bengaluru, India",
      role: "Lead Smart contract developer",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Lead Smart contract developer @GreenKWH
              </h1>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 2025 - March 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Bengaluru, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
            <ul className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built the tokenomics for the token and the smart contract for the token.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built the smart contract for the token.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Integrated oracles to get real time reliable data.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
