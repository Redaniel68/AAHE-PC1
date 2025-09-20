import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function EstateProjects() {
  const pastProjects = [
    {
      title: "Road Rehabilitation",
      description: "Completed resurfacing and pothole repairs across key internal estate roads for smoother access.",
      date: "2023",
    },
    {
      title: "Street Lighting Upgrade",
      description: "Installed modern solar-powered streetlights for improved safety and visibility.",
      date: "2024",
    },
    {
      title: "Estate Security Gatehouse",
      description: "Constructed a new secure gatehouse with CCTV integration and access control systems.",
      date: "2024",
    },
  ];

  const newProject = {
    title: "Comprehensive Drainage & Flood Control System",
    description:
      "Design and construction of a robust drainage network across Abraham Adesanya Housing Estate to provide a permanent solution to recurring flooding. This includes excavation, channel lining, underground piping, and connection to Lagos State main drainage systems.",
    status: "Fundraising & Planning Phase (2025)",
    paystackLink: "https://paystack.com/pay/aahe-floodfund" // Replace with actual Paystack link
  };

  // Example fundraising state (can be fetched from backend/Paystack API)
  const [raised, setRaised] = useState(2500000); // amount raised so far (₦)
  const target = 10000000; // target amount (₦)

  const progress = Math.min((raised / target) * 100, 100);

  useEffect(() => {
    // In a real setup, fetch live data from your backend or Paystack API
    // setRaised(fetchedAmount);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Abraham Adesanya Housing Estate
          </h1>
          <p className="text-gray-600 text-lg">Project Committee Initiatives</p>
        </header>

        {/* Past Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Past Projects Successfully Executed
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {pastProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="rounded-2xl shadow-md">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {project.description}
                    </p>
                    <p className="text-gray-500 text-xs">Year: {project.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* New Project */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Ongoing / Upcoming Project
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="rounded-2xl shadow-lg border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-blue-700 mb-3">
                  {newProject.title}
                </h3>
                <p className="text-gray-600 mb-3">{newProject.description}</p>
                <p className="text-sm font-medium text-gray-700 mb-4">
                  Current Status: {newProject.status}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>₦{raised.toLocaleString()} raised</span>
                    <span>Target: ₦{target.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{progress.toFixed(1)}% of target</p>
                </div>

                <a href={newProject.paystackLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-6 py-2">
                    Contribute Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-10">
          © 2025 Abraham Adesanya Housing Estate Project Committee
        </footer>
      </div>
    </div>
  );
}
