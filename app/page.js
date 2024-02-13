import React from "react";
import Link from "next/link";
import Header from "@/components/Header";


const InterviewPrep = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-10 text-center">
        <div className="rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 space-y-6">
              <h1 className="text-5xl font-bold text-black-800 mb-3">
                Stop Failing Your Interviews
              </h1>
              <p className="text-gray-600 text-xl mb-6">
                Join Brighter Tunnel and turn your interview challenges into
                opportunities. Get ready to land your dream software engineering
                job!
              </p>
              {/* <ul className="space-y-4 text-lg">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✔</span>
                  Gain a competitive edge with tailored mock interviews
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✔</span>
                  Receive constructive feedback to sharpen your skills
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✔</span>
                  Boost your confidence and increase job prospects
                </li>
              </ul> */}
              <h2 className="text-2xl font-semibold">How we can help:</h2>
              <div className="container mx-auto px-4 py-1 text-center">
                <div className="rounded-lg shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 gap-4">
                    <Card
                      title="Book a Mock Interview"
                      description="Get personalized, real-world interview experience. Price: $100"
                      href="https://calendly.com/brightertunnel/1-hr-technical-coding-interview"
                      text="Book Interview"
                    />
                    <Card
                      title="Interview Live On Our Youtube Channel"
                      description="Participate in a live interview and receive instant feedback."
                      href="https://forms.gle/evQMP64G6aUf9N5J9"
                      text="Join Waitlist"
                    />
                    <Card
                      title="Active Job Openings"
                      description="Browse through the latest job openings in the software industry. [Free]"
                      href="http://brigherTunnel.com/jobs"
                      text=" Browse Jobs"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full md:block relative">
              <iframe
                src="https://www.loom.com/embed/1da83acacf5b4801a65ba2faafd4ec1c?sid=494f6e0d-a315-4555-b87e-0a8150cdf2a1"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                className="w-full h-64 md:h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials or Success Stories Section */}
      <Footer />
    </div>
  );
};

const Card = ({ href, title, description, text }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      href={href}
      passHref
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
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
