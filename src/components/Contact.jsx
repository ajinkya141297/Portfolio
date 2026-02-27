import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div
      id="Contacts"
      className="bg-purple-50 pt-24 pb-20 px-6 sm:px-8 md:px-12 lg:px-18 xl:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-purple-600 bg-white
          rounded-full px-4 py-1.5 w-fit mx-auto mb-5 shadow-sm border border-purple-100">
          <i className="ri-mail-send-line"></i>
          <span className="text-sm font-medium">Contact</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
          Let's Work Together
        </h2>
        <p className="text-sm text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
          I'm currently open to new opportunities — freelance projects, full-time roles, or just a conversation.
          Drop me a message and I'll get back to you quickly.
        </p>

        {/* Contact Info Cards */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-md
            hover:-translate-y-1 transition-all border border-purple-100">
            <div className="w-10 h-10 bg-purple-700 flex items-center justify-center rounded-full text-white text-lg">
              <i className="ri-mail-fill"></i>
            </div>
            <div className="text-left">
              <small className="text-xs text-gray-400">Email</small>
              <h4 className="font-semibold text-sm text-gray-800">ajinkya141297@gmail.com</h4>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-md
            hover:-translate-y-1 transition-all border border-purple-100">
            <div className="w-10 h-10 bg-pink-600 flex items-center justify-center rounded-full text-white text-lg">
              <i className="ri-phone-line"></i>
            </div>
            <div className="text-left">
              <small className="text-xs text-gray-400">Phone</small>
              <h4 className="font-semibold text-sm text-gray-800">+91 9561318939</h4>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-md
            hover:-translate-y-1 transition-all border border-purple-100">
            <div className="w-10 h-10 bg-indigo-600 flex items-center justify-center rounded-full text-white text-lg">
              <i className="ri-map-pin-2-line"></i>
            </div>
            <div className="text-left">
              <small className="text-xs text-gray-400">Location</small>
              <h4 className="font-semibold text-sm text-gray-800">Pune, India</h4>
            </div>
          </div>
        </div>

        {/* CTA to full contact page */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 py-4 px-8 bg-purple-700 text-white rounded-xl
            hover:bg-purple-600 transition-all hover:-translate-y-1 shadow-lg shadow-purple-300
            font-medium text-sm"
        >
          Send Me a Message
          <i className="ri-send-plane-fill"></i>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
