import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageCircle,
  Send,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://cautious-giggle-jx9qv6grqgw35q6q-5001.app.github.dev/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setError(null);
      } else {
        throw new Error("Failed to submit feedback");
      }
    } catch (err) {
      console.log(err.error)
      setError(err.message);
    }
  };

  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      duration: 800,
      easing: "ease-out",
    });

    sr.reveal(".contact-section", { origin: "bottom", distance: "40px", delay: 200 });
    sr.reveal(".contact-card", { origin: "bottom", distance: "30px", delay: 300, interval: 200 });
    sr.reveal(".map-frame", { origin: "bottom", distance: "40px", delay: 400, scale: 0.95 });

    return () => sr.destroy();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-secondary py-10 pt-36 px-4">
      <div className="w-full max-w-6xl bg-light shadow-xl rounded-2xl p-8 text-primary flex flex-col md:flex-row gap-8 contact-section">
        {/* Left Section - Address & Contact Info */}
        <div className="flex-1 space-y-6 contact-card">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold flex items-center gap-3 text-primary">
            <MapPin className="text-accent w-8 h-8" />
            Contact Us
          </h2>
          <p className="text-base sm:text-lg font-body text-primary/80">
            We’re here to connect with you! Reach out via phone, email, or visit our office.
          </p>
          <div className="space-y-4">
            {[
              { icon: <Phone className="w-6 h-6 text-accent" />, text: "+251 912 345 678" },
              { icon: <Mail className="w-6 h-6 text-accent" />, text: "info@artifactcompany.com" },
              { icon: <Clock className="w-6 h-6 text-accent" />, text: "Mon - Fri: 9:00 AM - 6:00 PM" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-primary/80 hover:text-accent transition duration-300"
              >
                {item.icon}
                <span className="text-base font-body font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {[
              { href: "mailto:info@artifactcompany.com", text: "Email Us", icon: <ArrowRight className="ml-2 w-5 h-5" /> },
              { href: "https://wa.me/251912345678", text: "Live Chat", icon: <MessageCircle className="ml-2 w-5 h-5" /> },
            ].map((btn, index) => (
              <a
                key={index}
                href={btn.href}
                className="flex items-center justify-center bg-accent text-primary px-6 py-3 rounded-lg font-body font-semibold text-base border border-border shadow-md hover:bg-accent/80 hover:shadow-lg transition-all duration-300"
              >
                {btn.text} {btn.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 bg-secondary p-6 rounded-lg shadow-inner contact-card">
          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
            Share Your Thoughts
          </h3>
          {submitted ? (
            <p className="text-accent font-body font-medium">
              Thank you! Your message has been sent successfully.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-light text-primary border border-border focus:ring-2 focus:ring-accent outline-none transition duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-light text-primary border border-border focus:ring-2 focus:ring-accent outline-none transition duration-300"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-light text-primary border border-border focus:ring-2 focus:ring-accent outline-none transition duration-300"
                required
              />
              {error && <p className="text-red-500 font-body">{error}</p>}
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-accent text-primary px-6 py-3 rounded-lg font-body font-semibold text-base shadow-md hover:bg-accent/80 hover:shadow-lg transition-all duration-300"
              >
                Send Feedback <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="w-full max-w-6xl mt-10 h-80 rounded-xl overflow-hidden shadow-lg border border-border map-frame">
        <iframe
          title="Google Maps"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086167!2d144.95592831590452!3d-37.81720974202143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f31a3b%3A0x3e7e62c92da83e01!2sMelbourne%20City%20Centre!5e0!3m2!1sen!2sau!4v1634567890123!5m2!1sen!2sau"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Contact;