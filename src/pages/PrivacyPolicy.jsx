import React from "react";
import {
  Shield,
  Lock,
  Eye,
  FileLock2,
  RefreshCcw,
  Users,
  AlertCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Data Protection",
      content:
        "We implement robust security measures to protect your personal and medical information. All data is encrypted using industry-standard protocols and stored in secure servers.",
    },
    {
      icon: Lock,
      title: "Information Collection",
      content:
        "We collect only essential information needed for medical testing and diagnosis. This includes personal details, medical history, and test results.",
    },
    {
      icon: Eye,
      title: "Data Usage",
      content:
        "Your information is used solely for providing medical services, improving our diagnostic accuracy, and maintaining medical records as required by law.",
    },
    {
      icon: FileLock2,
      title: "Data Storage",
      content:
        "Medical records are retained for the period required by healthcare regulations. We ensure secure storage with restricted access to authorized personnel only.",
    },
    {
      icon: RefreshCcw,
      title: "Information Updates",
      content:
        "You have the right to access, update, or correct your personal information. Contact our privacy officer for any data-related requests.",
    },
    {
      icon: Users,
      title: "Third-Party Sharing",
      content:
        "We share your information only with authorized healthcare providers involved in your care and when required by law.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20 animate-gradient">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-white animate-slideIn">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl opacity-90 max-w-2xl">
                Your privacy is our priority. Learn how we protect and manage
                your personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Last Updated Section */}
        <section className="bg-white py-6 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center text-gray-600">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span>Last Updated: November 26, 2024</span>
              <div className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam in
                explicabo reiciendis perspiciatis enim quisquam doloremque
                cupiditate placeat aut nulla maxime quibusdam animi, voluptates
                deserunt earum quas vel, nisi expedita? Cum iste non quas et
                nostrum veniam laboriosam nobis perferendis accusantium
                cupiditate expedita similique numquam magnam impedit
                exercitationem voluptates provident animi quae, itaque, cumque
                fuga ex iusto modi! Commodi odio laboriosam, iure saepe aut esse
                eaque ad deleniti atque aspernatur consectetur blanditiis
                corrupti officia necessitatibus perspiciatis? Modi ea incidunt
                quibusdam voluptatibus distinctio neque similique culpa quaerat
                assumenda ad asperiores exercitationem rem commodi maiores eius
                ipsum, cum sequi perferendis veritatis, explicabo dolor facilis
                harum voluptate adipisci. Inventore ratione minima hic.
                Recusandae a similique soluta quae expedita ratione distinctio,
                consequuntur molestiae, vitae eum debitis omnis inventore iste
                deserunt iusto fuga sit reprehenderit nobis hic maxime aliquam
                voluptatem repellendus. Deserunt fugit esse cupiditate
                consequatur, veritatis impedit earum itaque architecto culpa in
                nulla ducimus aliquid, cum fugiat quasi officiis eos et deleniti
                nesciunt magni optio ab ut illum? Quos ducimus quidem, suscipit
                rerum optio totam similique alias? Eaque necessitatibus ea error
                molestiae enim officia libero. Perferendis temporibus rerum
                maiores atque placeat laudantium eos amet! Laudantium, accusamus
                libero? Explicabo dolorum cumque officiis. Laudantium labore
                ducimus accusamus voluptatem ipsum minima quod rerum accusantium
                itaque voluptatum necessitatibus distinctio, recusandae porro
                consectetur, magnam voluptatibus. Impedit inventore, et qui eos
                rem in quibusdam labore dolorum fugiat esse magni ipsa quasi,
                vel cupiditate beatae corrupti quas eaque vero porro similique
                voluptatem? Maiores eaque perspiciatis nesciunt ducimus. Quia
                dolores iusto architecto?
              </div>
            </div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 transform translate-y-10 bg-white p-6 rounded-lg shadow-md
                         hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `₹{index * 100}ms` }}
                >
                  <section.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h2 className="text-xl font-semibold mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="animate-on-scroll opacity-0 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Questions About Your Privacy?
              </h2>
              <p className="text-gray-600 mb-6">
                Contact our Privacy Officer at privacy@pathlab.com or call us at
                +1 (555) 123-4567
              </p>
              <button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 
                           transform hover:scale-105 transition-all"
              >
                Contact Us
              </button>
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

export default PrivacyPolicy;
