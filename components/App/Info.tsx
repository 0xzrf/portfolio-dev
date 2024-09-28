"use client";
import React from "react";
import {motion} from "framer-motion"
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generation";
import Link from "next/link";
function Info() {
  const words = `Hacker and builder
    Learning technologies that I'm curious about, & hacking what I understand thoroughly`;

  return (
    <div className="md:ml-[11.9rem] ml-[1rem] mt-10 ">
      <div className="md:gap-28 gap-12 flex md:flex-row flex-col ">
        <div className="font-serif">
          <img src="/name.png" alt="logo" className="md:w-[20vw] w-[70%] h-[10vh] " />
        </div>
        <div className="font-serif w-full flex flex-col">
          <TextGenerateEffect
            duration={0.75}
            className="text-white font-serif mt-0 md:mt-2 md:max-w-[30vw]  whitespace-pre-line"
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
          <Link href="/reading-list">
            <motion.h1 className="text-white font-bold hover:underline mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }}>
              Check my reading list to know more about my interests{"->"}
            </motion.h1>
          </Link>
        </div>


      </div>

    </div>
  );
}

export default Info;
