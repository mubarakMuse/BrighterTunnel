import Header from '@/components/Header';
import React from 'react';

const jobSites = [
  "https://boards.greenhouse.io/airship",
  "https://boards.greenhouse.io/acryldata",
  "https://boards.greenhouse.io/adim",
  "https://boards.greenhouse.io/affirm",
  "https://boards.greenhouse.io/airbyte",
  "https://boards.greenhouse.io/angi",
  "https://boards.greenhouse.io/applovin",
  "https://boards.greenhouse.io/assembled",
  "https://boards.greenhouse.io/babylist",
  "https://boards.greenhouse.io/betterup",
  "https://boards.greenhouse.io/betterworks",
  "https://boards.greenhouse.io/blockdaemon",
  "https://boards.greenhouse.io/branch",
  "https://boards.greenhouse.io/bubble",
  "https://boards.greenhouse.io/carta",
  "https://boards.greenhouse.io/cityblockhealth",
  "https://boards.greenhouse.io/clearcover",
  "https://boards.greenhouse.io/clipboardhealth",
  "https://boards.greenhouse.io/code42",
  "https://boards.greenhouse.io/creditkarma",
  "https://boards.greenhouse.io/doxo",
  "https://boards.greenhouse.io/edo",
  "https://boards.greenhouse.io/eventbriteinc",
  "https://boards.greenhouse.io/expa",
  "https://boards.greenhouse.io/ezcaterinc",
  "https://boards.greenhouse.io/fathom",
  "https://boards.greenhouse.io/garnerhealth",
  "https://boards.greenhouse.io/gather",
  "https://boards.greenhouse.io/gleanwork",
  "https://boards.greenhouse.io/healthie",
  "https://boards.greenhouse.io/himshers",
  "https://boards.greenhouse.io/homebound",
  "https://boards.greenhouse.io/humane",
  "https://boards.greenhouse.io/khanacademy",
  "https://boards.greenhouse.io/lithic",
  "https://boards.greenhouse.io/magiceden",
  "https://boards.greenhouse.io/mntn",
  "https://boards.greenhouse.io/myfitnesspal",
  "https://boards.greenhouse.io/notion",
  "https://boards.greenhouse.io/nuna",
  "https://boards.greenhouse.io/onesignal",
  "https://boards.greenhouse.io/onxmaps",
  "https://boards.greenhouse.io/pacaso",
  "https://boards.greenhouse.io/paretocaptiveservicesllc",
  "https://boards.greenhouse.io/pearlhealth",
  "https://boards.greenhouse.io/peregrinetechnologies",
  "https://boards.greenhouse.io/philo",
  "https://boards.greenhouse.io/postman",
  "https://boards.greenhouse.io/postscript",
  "https://boards.greenhouse.io/raft",
  "https://boards.greenhouse.io/recharge",
  "https://boards.greenhouse.io/reddit",
  "https://boards.greenhouse.io/retool",
  "https://boards.greenhouse.io/rinsed",
  "https://boards.greenhouse.io/runwayml",
  "https://boards.greenhouse.io/rvohealth",
  "https://boards.greenhouse.io/safebase",
  "https://boards.greenhouse.io/sentilink",
  "https://boards.greenhouse.io/sonyinteractiveentertainmentglobal",
  "https://boards.greenhouse.io/spotoncorporate",
  "https://boards.greenhouse.io/tavus",
  "https://boards.greenhouse.io/vannevarlabs",
  "https://boards.greenhouse.io/vgw",
  "https://boards.greenhouse.io/whatnot",
  "https://boards.greenhouse.io/zscaler",
  "https://boards.greenhouse.io/zynga"
];


const JobBoardPage = () => {
  return (
    <>
          <Header/>

    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Software Engineer Job Board</h1>
      <h1 className="text-1xl \ text-center mb-6">Regularly Updated List of Active Hiring Opportunities</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Job Site URL</th>
            </tr>
          </thead>
          <tbody>
            {jobSites.map((url, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="link link-hover">
                    {url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>

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
};

export default JobBoardPage;