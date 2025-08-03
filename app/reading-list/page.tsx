import React from 'react';
import { Check, Circle } from 'lucide-react';

const ReadingList = () => {
  const books = {
    "CS Knowledge": [
      {title: "The C Programming language", link:"https://github.com/auspbro/ebook-c/blob/master/The.C.Programming.Language.2Nd.Ed%20Prentice.Hall.Brian.W.Kernighan.and.Dennis.M.Ritchie..pdf", completed: false},
      {title: "Computer Systems: A programer's perspective", link:"https://www.cs.sfu.ca/~ashriram/Courses/CS295/assets/books/CSAPP_2016.pdf", completed: false},
      { title: "x86 ASM Language",link: "https://www.youtube.com/playlist?list=PLmxT2pVYo5LB5EzTPZGfFN0c2GDiSXgQe", completed: false },
      { title: "Intro To Algorithm", link: "https://github.com/calvint/AlgorithmsOneProblems/blob/master/Algorithms/Thomas%20H.%20Cormen,%20Charles%20E.%20Leiserson,%20Ronald%20L.%20Rivest,%20Clifford%20Stein%20Introduction%20to%20Algorithms,%20Third%20Edition%20%202009.pdf", completed: false },
    ],
    "Upcoming Projects": [
      {title: "A GPT-3 Smart contract Copoilot for Solana Development", completed: true},
      {title: "A Wallet analyzer and security audit tool", completed: false},
      {title: "Rust backend w/ Axum", completed: true},
      {title:"Rust based chatbot", completed: false},
      {title:"Terminal based communication system and collaboration tool in Rust", completed: false},
      {title: "Vim Editor in Rust", completed: false},
      {title:"Git in Rust", completed: false},
      {title: "Small OS In Rust", completed: false},
      {title: "TCP and HTTP in Rust", completed: false},
      {title:"Linux Kernel in Rust", completed: false}
    ]
  };

  return (
    <div className="bg-[#18191a] text-gray-300 min-h-screen px-56 pt-20 font-mono">
       <div className="mb-4 text-green-500">
        ┌──(zeref㉿kali)-[~]
        <br />
        └─$ cat reading_list.txt
      </div>
      <h1 className="text-2xl font-bold mb-4 text-teal-400"># Reading List</h1>
        <div className='px-10'>
            {Object.entries(books).map(([category, bookList]) => (
                <div key={category} className="mb-6">
                <h2 className="text-xl font-bold mb-2 text-teal-400"># {category}</h2>
                <ul>
                    {bookList.map((book, index) => (
                    <li key={index} className="flex items-center mb-1">
                        {book.completed ? (
                        <Check size={16} className="mr-2 text-teal-400" />
                        ) : (
                        <Circle size={16} className="mr-2 text-gray-500" />
                        )}
                        <span>{book.title}</span>
                    </li>
                    ))}
                </ul>
                </div>
            ))}

        </div>
    </div>
  );
};

export default ReadingList;