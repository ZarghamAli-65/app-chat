import Image from "next/image";
import React from "react";

const topics = [
  {
    text: "Next Js",
    img: "nextjs.png",
    desc: "Next.js is a React framework that enables server-side rendering and static site generation for React applications.",
  },
  {
    text: "React",
    img: "react.png",
    desc: "React is a JavaScript library for building user interfaces, known for its component-based architecture and virtual DOM.",
  },
  {
    text: "Node.js",
    img: "nodejs.png",
    desc: "Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server-side.",
  },
  {
    text: "Tailwind CSS",
    img: "tailwindcss.png",
    desc: "Tailwind CSS is a utility-first CSS framework that provides a wide range of pre-defined classes for rapid styling.",
  },
  {
    text: "JavaScript",
    img: "javascript.png",
    desc: "JavaScript is a high-level, interpreted programming language widely used for web development, including front-end and back-end.",
  },
  {
    text: "MongoDB",
    img: "mongodb.png",
    desc: "MongoDB is a NoSQL document-oriented database that stores data in flexible, JSON-like documents.",
  },
];

const forums = () => {
  return (
    <div className="container mx-auto my-28 ">
      <h1 className="text-3xl font-bold text-center">Discussion Forums</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {topics.map((topic) => (
          <div
            key={topic.img}
            className="shadow-lg bg-slate-500 w-1/4 m-4 flex-col items-center py-10"
          >
            <Image src={topic.img} alt={topic.text} width={34} height={34} />
            <h2 className="text-xl font-semibold">{topic.text}</h2>
            <p>{topic.desc}</p>
            <button>Discuss Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default forums;
