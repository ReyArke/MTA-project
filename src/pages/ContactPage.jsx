import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl mt-20">
        <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>

        <div className="space-y-4 font-sans">
          {/* Contact Details */}
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-3">
              <span className="font-medium text-lg">ဖုန်း :</span>
              <a
                href="tel:+11234567890"
                className="text-indigo-600 hover:underline"
              >
                +1 123 456 7890
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="font-medium text-lg">အီးမေးလ်:</span>
              <a
                href="mailto:contact@example.com"
                className="text-indigo-600 hover:underline"
              >
                contact@example.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="font-medium text-lg">လိပ်စာ:</span>
              <p className="text-gray-700">123 Example St, City, Country</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Iframe Section */}
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Our Location
        </h2>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61103.96069152533!2d96.05223229140003!3d16.82647797598942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195544455befb%3A0xe80c4f97c96ee3f2!2sLuxury%20Online%20Shopping!5e0!3m2!1sen!2smm!4v1733768496102!5m2!1sen!2smm"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61103.96069152533!2d96.05223229140003!3d16.82647797598942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195544455befb%3A0xe80c4f97c96ee3f2!2sLuxury%20Online%20Shopping!5e0!3m2!1sen!2smm!4v1733768496102!5m2!1sen!2smm" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
