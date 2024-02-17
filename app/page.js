import React from "react";
import Link from "next/link";
import Header from "@/components/Header";

const InterviewPrep = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10 text-center">
        <div className="container mx-auto px-4 py-10 text-center">
          <h1 className="text-4xl md:text-3xl font-bold text-blue-800 mb-6">
            Transform Your Interview Performance
          </h1>
          <p className="text-gray-600 text-xl mb-8">
            Navigating job interviews can be daunting, but with Brighter Tunnel, you can approach them with confidence and skill.
          </p>
          <h2 className="text-3xl font-semibold mb-5">Our Services:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Mock Interview Sessions"
              description="Experience tailored, real-world interview scenarios. Sharpen your skills for only $100."
              href="https://calendly.com/brightertunnel/1-hr-technical-coding-interview"
              text="Schedule Now"
            />
            <Card
              title="YouTube Interview Feature"
              description="Showcase your talents on our YouTube channel and attract potential employers."
              href="youtube-interview"
              text="Sign Up"
            />
            <Card
              title="Latest Job Listings"
              description="Explore current openings in the tech industry and find your next opportunity. Free access."
              href="/jobs"
              text="View Listings"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Card = ({ href, title, description, text }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-2xl font-bold text-blue-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-5">{description}</p>
    <Link
      href={href}
      passHref
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
    >
      {text}
    </Link>
  </div>
);

const Footer = () => (
  <footer className="bg-white shadow-lg">
    <div className="container mx-auto px-6 py-4">
      <div className="flex flex-col items-center">
        <p className="text-gray-500 text-sm text-center">
          © 2024 Brighter Tunnel. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
export default InterviewPrep;
