import React, { useState } from "react";
import { Calendar, Clock, MapPin, Home, CreditCard } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    testType: "",
    date: "",
    time: "",
    location: "lab",
    address: "",
    symptoms: "",
    insurance: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // You can now access the form data here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //Take all form data and update the value of the input that changed
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-16 animate-gradient">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-white animate-slideIn">
              <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
              <p className="text-lg opacity-90">
                Schedule your test with our expert team
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto px-4 animate-fadeIn"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold mb-4">
                    Personal Information
                  </h2>
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="border p-3 rounded-lg"
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border p-3 rounded-lg"
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="border p-3 rounded-lg"
                  onChange={handleChange}
                  required
                />

                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="border p-3 rounded-lg"
                  onChange={handleChange}
                  required
                />

                <select
                  name="gender"
                  className="border p-3 rounded-lg"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                {/* Appointment Details */}
                <div className="col-span-2 mt-6">
                  <h2 className="text-xl font-semibold mb-4">Test Details</h2>
                </div>

                <select
                  name="testType"
                  className="border p-3 rounded-lg"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Test Type</option>
                  <option value="blood">Blood Test</option>
                  <option value="urine">Urine Analysis</option>
                  <option value="covid">COVID-19 Test</option>
                  <option value="allergy">Allergy Test</option>
                </select>

                <input
                  type="date"
                  name="date"
                  className="border p-3 rounded-lg"
                  onChange={handleChange}
                  required
                />

                <select
                  name="time"
                  className="border p-3 rounded-lg"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time Slot</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                </select>

                <div className="col-span-2">
                  <label className="block mb-2">Collection Type</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="location"
                        value="lab"
                        checked={formData.location === "lab"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <MapPin className="w-4 h-4 mr-1" />
                      Lab Visit
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="location"
                        value="home"
                        checked={formData.location === "home"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <Home className="w-4 h-4 mr-1" />
                      Home Collection
                    </label>
                  </div>
                </div>

                {formData.location === "home" && (
                  <div className="col-span-2">
                    <textarea
                      name="address"
                      placeholder="Home Address"
                      className="border p-3 rounded-lg w-full"
                      rows="3"
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}

                <div className="col-span-2">
                  <textarea
                    name="symptoms"
                    placeholder="Any symptoms or special requirements?"
                    className="border p-3 rounded-lg w-full"
                    rows="3"
                    onChange={handleChange}
                  />
                </div>

                <input
                  type="text"
                  name="insurance"
                  placeholder="Insurance Policy Number (if any)"
                  className="border p-3 rounded-lg col-span-2"
                  onChange={handleChange}
                />

                <div className="col-span-2 mt-6">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                           hover:bg-blue-700 transform hover:scale-105 transition-all"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>

        <style jsx>{`
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
          }

          .animate-slideIn {
            animation: slideIn 1s ease-out forwards;
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
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
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
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

export default AppointmentForm;
