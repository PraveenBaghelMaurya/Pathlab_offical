import React, { useState, useEffect } from "react";
import {
  Search,
  Clock,
  Home,
  DollarSign,
  AlertCircle,
  Filter,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppointmentForm from "./AppointmentForm";

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedTest, setExpandedTest] = useState(null);

  const testData = {
    bloodTests: [
      {
        id: 1,
        name: "Complete Blood Count (CBC)",
        price: 149,
        category: "Blood Test",
        turnaround: "24 hours",
        description:
          "Measures red blood cells, white blood cells, platelets, and hemoglobin levels",
        preparation: "Fasting may be required for 8-12 hours",
        homeCollection: true,
      },
      {
        id: 2,
        name: "Basic Metabolic Panel (BMP)",
        price: 55,
        category: "Blood Test",
        turnaround: "24 hours",
        description:
          "Measures glucose, calcium, electrolytes, and kidney function",
        preparation: "Fasting required for 8-12 hours",
        homeCollection: true,
      },
      {
        id: 3,
        name: "Lipid Panel",
        price: 60,
        category: "Blood Test",
        turnaround: "24 hours",
        description:
          "Measures cholesterol levels including HDL, LDL, and triglycerides",
        preparation: "Fasting required for 12-14 hours",
        homeCollection: true,
      },
      {
        id: 4,
        name: "Thyroid Function Tests (TFTs)",
        price: 75,
        category: "Blood Test",
        turnaround: "48 hours",
        description:
          "Measures TSH, T3, and T4 levels to assess thyroid function",
        preparation: "No special preparation required",
        homeCollection: true,
      },
    ],
    urineTests: [
      {
        id: 5,
        name: "Urinalysis",
        price: 30,
        category: "Urine Test",
        turnaround: "24 hours",
        description:
          "Analyzes physical, chemical, and microscopic properties of urine",
        preparation: "Clean catch sample required",
        homeCollection: true,
      },
      {
        id: 6,
        name: "Urine Culture",
        price: 45,
        category: "Urine Test",
        turnaround: "72 hours",
        description: "Identifies bacterial infections in the urinary tract",
        preparation: "Clean catch sample required",
        homeCollection: true,
      },
    ],
    geneticTests: [
      {
        id: 7,
        name: "Carrier Screening",
        price: 299,
        category: "Genetic Test",
        turnaround: "14 days",
        description:
          "Identifies if you carry genes for certain inherited disorders",
        preparation: "Genetic counseling recommended",
        homeCollection: true,
      },
      {
        id: 8,
        name: "Predictive Genetic Testing",
        price: 499,
        category: "Genetic Test",
        turnaround: "21 days",
        description:
          "Identifies genetic variations associated with increased disease risk",
        preparation: "Genetic counseling required",
        homeCollection: true,
      },
    ],
  };

  const allTests = [
    ...testData.bloodTests,
    ...testData.urineTests,
    ...testData.geneticTests,
  ];

  const filteredTests = allTests.filter((test) => {
    const matchesSearch = test.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      test.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 animate-gradient">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideIn">
              Our Diagnostic Services
            </h1>
            <p className="text-xl mb-8 animate-slideIn delay-200">
              Comprehensive medical testing with state-of-the-art technology
            </p>
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
                  placeholder="Search tests..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="blood">Blood Tests</option>
                <option value="urine">Urine Tests</option>
                <option value="genetic">Genetic Tests</option>
              </select>
            </div>
          </div>
        </section>

        {/* Tests Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTests.map((test, index) => (
                <div
                  key={test.id}
                  className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-700 
                         bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
                  style={{ animationDelay: `₹{index * 100}ms` }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{test.name}</h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{test.turnaround}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span>₹{test.price}</span>
                      </div>
                      {test.homeCollection && (
                        <div className="flex items-center">
                          <Home className="w-4 h-4 mr-1" />
                          <span>Home Collection</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{test.description}</p>
                    <button
                      onClick={() =>
                        setExpandedTest(
                          expandedTest === test.id ? null : test.id
                        )
                      }
                      className="flex items-center justify-between w-full text-blue-600 hover:text-blue-700"
                    >
                      <span>View Details</span>
                      <ChevronDown
                        className={`w-5 h-5 transform transition-transform ₹{
                          expandedTest === test.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedTest === test.id && (
                      <div className="mt-4 pt-4 border-t">
                        <h4 className="font-semibold mb-2">
                          Preparation Required:
                        </h4>
                        <p className="text-gray-600 mb-4">{test.preparation}</p>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Book Appointment
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
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
