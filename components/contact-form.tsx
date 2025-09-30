"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    order: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, order, subject, message } = formData;

    if (!name || !email || !order || !subject || !message) {
      alert("Semua field harus diisi sebelum mengirim pesan.");
      return;
    }

    const text = `*Contact Form Submission*
    Name: ${name}
    Email: ${email}
    Order: ${order}
    Subject: ${subject}
    Message: ${message}`;

    const phoneNumber = "6281281870275";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="contact-form">
      <h2 className="text-2xl font-light mb-6">Get In Touch</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="order"
            className="block text-sm font-medium text-neutral-700 mb-1"
          >
            Order Number (if applicable)
          </label>
          <input
            type="text"
            id="order"
            name="order"
            required
            value={formData.order}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
            placeholder="e.g. MNY12345"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-neutral-700 mb-1"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
          >
            <option value="">Select a topic</option>
            <option value="Order Status">Order Status</option>
            <option value="Returns & Exchanges">Returns & Exchanges</option>
            <option value="Product Information">Product Information</option>
            <option value="Sizing Questions">Sizing Questions</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
