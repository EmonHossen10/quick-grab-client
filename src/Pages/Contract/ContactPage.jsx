import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header Section */}
      <div className="bg-yellow-500 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">We’d love to hear from you</p>
      </div>

      {/* Contact Info + Form */}
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-4">
            Have questions or feedback? Reach out to us and we’ll be happy to
            assist.
          </p>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              📍 <span>123 Food Street, Dhaka, Bangladesh</span>
            </p>
            <p className="flex items-center gap-2">
              📞 <span>+880 123 456 789</span>
            </p>
            <p className="flex items-center gap-2">
              ✉️ <span>info@quickgrab.com</span>
            </p>
          </div>

          {/* Google Map */}
          <div className="mt-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.490884048421!2d90.3912!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f40!2sDhaka!5e0!3m2!1sen!2sbd!4v169456789"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg w-full transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
