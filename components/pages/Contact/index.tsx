"use client";
import React, { useState } from "react";
import { Phone, MapPin, Mail, Send, User, MessageCircle } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitEvent = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      const whatsappURL = `https://api.whatsapp.com/send/?phone=6281336920647&text=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      )}&type=phone_number&app_absent=0`;
      window.open(whatsappURL, '_blank');
      setIsSubmitting(false);
    }, 1000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="min-h-screen py-1  md:py-12 px-1 md:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-glass rounded-full mb-6 shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Send me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 text-gray-100 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-dark rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Address</h3>
                    <p className="text-gray-300">Jember, East Java, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Phone Number</h3>
                    <p className="text-gray-300">+62 813 3692 0647</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Email</h3>
                    <p className="text-gray-300">abdulmukti@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-r from-blue-400 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-blue-100 mb-4">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
              <div className="flex items-center space-x-2 text-blue-100">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">Usually responds within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-dark rounded-2xl p-5 md:p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-200 mb-6">Send a Message</h2>
            
            <form onSubmit={submitEvent} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  focusedField === 'name' ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 bg-black/30 border-2 border-gray-700 rounded-xl focus:border-blue-500 focus:bg-black transition-all duration-300 outline-none text-gray-200 placeholder-gray-300"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  focusedField === 'email' ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Your Email"
                  className="w-full pl-12 pr-4 py-4 bg-black/30 border-2 border-gray-700 rounded-xl focus:border-blue-500 focus:bg-black transition-all duration-300 outline-none text-gray-200 placeholder-gray-300"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <div className={`absolute left-4 top-4 transition-colors duration-300 ${
                  focusedField === 'message' ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  <MessageCircle className="w-5 h-5" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full pl-12 pr-4 py-4 bg-black/30 border-2 border-gray-700 rounded-xl focus:border-blue-500 focus:bg-black transition-all duration-300 outline-none text-gray-200 placeholder-gray-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isFormValid && !isSubmitting
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Form Footer */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500 text-center">
                By sending this message, you agree to our terms of service and privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;