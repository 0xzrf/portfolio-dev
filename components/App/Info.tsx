"use client";
import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generation";
function Info() {
  const words = `Hacker and builder
    Learning technologies that I'm curious about, & hacking what I understand thoroughly`;

  return (
    <div className="ml-[11.9rem] mt-10 ">
      <div className="gap-28 flex">
        <div className="font-serif">
          <img src="/name.png" alt="logo" className="w-[17vw] h-[10vh]" />
        </div>
        <div className="font-serif flex flex-col">
          <TextGenerateEffect
            duration={0.75}
            className="text-white font-serif mt-2 max-w-[30vw] whitespace-pre-line"
            words={words}
          />
          <div className="flex text-white mt-4 gap-3 justify-start">
        <Mail />
        <a
          href="https://github.com/krishhh16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/krishhh16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://x.com/dev_krishhh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Info;
