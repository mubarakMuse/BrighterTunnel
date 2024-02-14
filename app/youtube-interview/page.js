import Header from "@/components/Header";
import React from "react";

const ytInterview = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-xl p-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd41J7qFjRANLZClfWUilg-JTnj4ghkY4vtDmnp3MJuw67kfg/viewform?embedded=true"
            width="100%"
            height="721" // Adjust height as needed or make it responsive
            style={{ minHeight: '500px' }} // Optional: Set a minimum height
          >
            Loading…
          </iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

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

export default ytInterview;
