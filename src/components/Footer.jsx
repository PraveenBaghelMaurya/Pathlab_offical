import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router";
import AppointmentForm from "../pages/AppointmentForm";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PathLab</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner in diagnostic healthcare services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/AboutUs" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/ServicesPage"
                  className="text-gray-300 hover:text-white"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/AppointmentForm"
                  className="text-gray-300 hover:text-white"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/CareersPage"
                  className="text-gray-300 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/PrivacyPolicy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Blood Tests</li>
              <li className="text-gray-300">Health Packages</li>
              <Link to="./AppointmentForm">
                <li className="text-gray-300">Home Collection</li>
              </Link>
              <li className="text-gray-300">Corporate Health</li>
              <li className="text-gray-300">Clinical Trials</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">+91 9667058231</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">info@pathlab.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">
                  Rohini Sector 3, Jaipur Golden
                  <br />
                  Healthcare City, HC 110085
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} PathLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
