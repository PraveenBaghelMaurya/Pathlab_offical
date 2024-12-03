import React, { useEffect } from "react";
import {
  Award,
  Users,
  Building2,
  Trophy,
  Activity,
  Microscope,
  Heart,
  Star,
  Globe,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
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
      <div className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen bg-gradient-to-br from-blue-600 to-blue-800 animate-gradient">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white z-10 animate-slideIn">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Story of Excellence
              </h1>
              <p className="text-xl max-w-2xl opacity-90">
                Two decades of pioneering diagnostic healthcare with innovation
                and compassion
              </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-20">
              <Microscope className="w-96 h-96 animate-float" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "20+", label: "Years of Excellence", icon: Trophy },
                { number: "100K+", label: "Satisfied Patients", icon: Heart },
                { number: "50+", label: "Lab Locations", icon: Building2 },
                { number: "99%", label: "Accuracy Rate", icon: Star },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 transform translate-y-10 text-center p-8 rounded-xl
                         hover:shadow-xl transition-all duration-300 bg-gray-50 group"
                  style={{ animationDelay: `₹{index * 200}ms` }}
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <h2 className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </h2>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-on-scroll opacity-0 transform translate-x-[-100px]">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To provide accessible, accurate, and timely diagnostic
                  services that empower healthcare decisions and improve patient
                  outcomes. We strive for excellence through innovation,
                  compassion, and unwavering commitment to quality.
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 transform translate-x-[100px]">
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in diagnostic healthcare, pioneering
                  advanced testing solutions while maintaining the highest
                  standards of accuracy and patient care. We envision a
                  healthier world through precise diagnostics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Patient First",
                  description:
                    "Prioritizing patient comfort and care in everything we do",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description:
                    "Maintaining highest standards in diagnostic accuracy",
                },
                {
                  icon: Globe,
                  title: "Innovation",
                  description: "Embracing cutting-edge technology and methods",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 transform translate-y-10 p-6 text-center
                         hover:shadow-xl transition-all duration-300 rounded-xl group"
                  style={{ animationDelay: `₹{index * 200}ms` }}
                >
                  <value.icon className="w-16 h-16 mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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
            transform: translateX(0) translateY(0) !important;
          }

          .animate-slideIn {
            animation: slideIn 1s ease-out forwards;
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

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
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

export default AboutUs;
