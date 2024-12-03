import React, { useState, useEffect } from "react";
import { Search, Briefcase, MapPin, Clock, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [expandedJob, setExpandedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Senior Pathologist",
      department: "Medical",
      location: "New York",
      type: "Full-time",
      experience: "5-8 years",
      description:
        "Leading diagnostic procedures and supervising laboratory operations.",
      requirements: [
        "MD or equivalent with specialization in Pathology",
        "Board certification in Clinical Pathology",
        "Experience with digital pathology systems",
        "Strong leadership and communication skills",
      ],
    },
    {
      id: 2,
      title: "Lab Technician",
      department: "Laboratory",
      location: "Chicago",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Performing diagnostic tests and maintaining laboratory equipment.",
      requirements: [
        "BS in Medical Laboratory Technology",
        "ASCP certification",
        "Experience with LIS systems",
        "Attention to detail and accuracy",
      ],
    },
    {
      id: 3,
      title: "AI Research Scientist",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      experience: "3-6 years",
      description: "Developing AI algorithms for diagnostic automation.",
      requirements: [
        "PhD in Computer Science or related field",
        "Experience with machine learning in healthcare",
        "Strong programming skills",
        "Research publication track record",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-br from-blue-600 to-blue-800 animate-gradient">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white z-10 animate-slideIn">
              <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl max-w-2xl opacity-90">
                Be part of innovation in healthcare diagnostics
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="all">All Departments</option>
                <option value="Medical">Medical</option>
                <option value="Laboratory">Laboratory</option>
                <option value="Research">Research</option>
              </select>
            </div>
          </div>
        </section>

        {/* Jobs List */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <div
                  key={job.id}
                  className="animate-on-scroll opacity-0 transform translate-y-10 bg-white rounded-lg shadow-md overflow-hidden
                         hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `₹{index * 100}ms` }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-gray-600">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          setExpandedJob(expandedJob === job.id ? null : job.id)
                        }
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <ChevronDown
                          className={`w-6 h-6 transform transition-transform ₹{
                            expandedJob === job.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {expandedJob === job.id && (
                      <div className="mt-4 pt-4 border-t animate-fadeIn">
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside text-gray-600 mb-6">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="mb-1">
                              {req}
                            </li>
                          ))}
                        </ul>
                        <button
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 
                                     transform hover:scale-105 transition-all"
                        >
                          Apply Now
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style jsx>{`
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
          }

          .animate-show {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .animate-slideIn {
            animation: slideIn 1s ease-out forwards;
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes slideIn {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .bg-grid-pattern {
            background-image: radial-gradient(
              circle,
              #ffffff 1px,
              transparent 1px
            );
            background-size: 30px 30px;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default CareersPage;
