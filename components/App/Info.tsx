"use client";
import React from "react";
import {motion} from "framer-motion"
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generation";
import Link from "next/link";

function Info() {
  const words1 = `Hacker and builder`;
  const words2 = `Learning technologies that I'm curious about, & hacking what I understand thoroughly`;

  return (
    <div className="md:ml-[11.9rem] ml-[1rem] mt-10">
      <div className="md:gap-28 gap-12 flex md:flex-row flex-col">
        {/* Enhanced Logo Section */}
        <motion.div 
          className="font-serif relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-2xl rounded-full"></div>
            <img 
              src="/zeref2.png" 
              alt="logo" 
              className="md:w-[50vw] w-[70%] h-[15vh] relative z-10 drop-shadow-2xl" 
            />
          </div>
        </motion.div>

        {/* Enhanced Content Section */}
        <motion.div 
          className="font-serif w-full flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Enhanced Text Generation Effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-xl rounded-lg"></div>
            <div className="relative z-10">
              <TextGenerateEffect
                duration={0.75}
                className="text-white font-serif mt-0 md:mt-2 md:max-w-[30vw] whitespace-pre-line"
                words={words1}
              />
              <TextGenerateEffect
                duration={0.75}
                className="text-white font-serif mt-0 md:mt-2 md:max-w-[30vw] whitespace-pre-line"
                words={words2}
              />
            </div>
          </div>

          {/* Enhanced Social Links */}
          <motion.div 
            className="flex text-white mt-6 gap-4 justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Email */}
            <motion.a
              href="mailto:ktmedia23@gmail.com"
              className="group p-3 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-zinc-600/50"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300" />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/0xzrf"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-zinc-600/50"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 group-hover:text-green-400 transition-colors duration-300" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/krishhh16"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-zinc-600/50"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 group-hover:text-blue-500 transition-colors duration-300" />
            </motion.a>

            {/* Twitter/X */}
            <motion.a
              href="https://x.com/0xzrf"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-zinc-600/50"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5 group-hover:text-sky-400 transition-colors duration-300" />
            </motion.a>
          </motion.div>

          {/* Enhanced Reading List Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-6"
          >
            <Link href="/reading-list">
              <motion.div
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-purple-500/30"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Reading List</span>
                <motion.span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Info;
