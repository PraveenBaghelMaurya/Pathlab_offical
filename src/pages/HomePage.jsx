import React, { useEffect } from "react";
import {
  Calendar,
  Home,
  Clock,
  Award,
  ArrowRight,
  Heart,
  Activity,
  Microscope,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppointmentForm from "./AppointmentForm";
import ServicesPage from "./ServicesPage";

import { Link } from "react-router";

const HomePage = () => {
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
      <div className="min-h-screen overflow-x-hidden">
        {/* Hero Section with Animation */}
        <section className="relative h-screen bg-gradient-to-br from-blue-600 to-blue-800 animate-gradient">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white space-y-6 animate-slideIn">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fadeIn">
                Your Health Journey
                <br />
                Starts Here
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl opacity-90 animate-fadeIn delay-200">
                State-of-the-art diagnostic services with cutting-edge
                technology
              </p>
              <div className="space-x-4 animate-fadeIn delay-300">
                <Link to="/AppointmentForm">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transform hover:scale-105 transition-all">
                    Book Now
                  </button>
                </Link>
                <Link to="/ServicesPage">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2 animate-float">
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                <Microscope className="w-full h-full text-white/80" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Scroll Animation */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Activity,
                  title: "Advanced Diagnostics",
                  desc: "Latest medical technology",
                },
                {
                  icon: Heart,
                  title: "Expert Care",
                  desc: "Experienced healthcare professionals",
                },
                {
                  icon: Clock,
                  title: "Quick Results",
                  desc: "Fast and accurate reporting",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-700 delay-100 
                         bg-white p-8 rounded-xl shadow-lg hover:shadow-xl group"
                  style={{ transitionDelay: `₹{index * 200}ms` }}
                >
                  <feature.icon className="w-16 h-16 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Carousel */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">
              <Link to={"/ServicesPage"}>Our Services</Link>
            </h2>
            <div className="flex overflow-x-auto space-x-6 pb-8 animate-slideIn">
              {[
                { title: "Blood Tests", price: "₹149" },
                { title: "Health Packages", price: "₹999" },
                { title: "Home Collection", price: "₹1499" },
                { title: "Corporate Health", price: "₹299" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex-none w-80 bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl text-white
                         transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-3xl font-bold mb-4">{service.price}</p>
                  <button className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Parallax */}
        <section
          className="relative h-96 bg-fixed bg-center bg-cover py-20"
          style={{ backgroundImage: 'url("/api/placeholder/1920/600")' }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center text-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Book your appointment today and take the first step towards
                better health
              </p>
              <Link to="/AppointmentForm">
                <button
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 
                           transform hover:scale-105 transition-all animate-bounce"
                >
                  Schedule Now
                </button>
              </Link>
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
            opacity: 0;
            animation: fadeIn 1s ease-out forwards;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
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

          @keyframes float {
            0% {
              transform: translateY(-50%) translateX(0);
            }
            50% {
              transform: translateY(-50%) translateX(20px);
            }
            100% {
              transform: translateY(-50%) translateX(0);
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

export default HomePage;
