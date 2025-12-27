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
import feedbackService from "../../services/feedback-service";
import Maps from "./Maps";

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

    feedbackService
      .create(formData)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setError(null);
      })
      .catch((err) => {
        console.log(err.error);
        setError(err.message);
      });
  };

  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      duration: 800,
      easing: "ease-out",
    });

    sr.reveal(".contact-section", {
      origin: "bottom",
      distance: "40px",
      delay: 200,
    });
    sr.reveal(".contact-card", {
      origin: "bottom",
      distance: "30px",
      delay: 300,
      interval: 200,
    });
    sr.reveal(".map-frame", {
      origin: "bottom",
      distance: "40px",
      delay: 400,
      scale: 0.95,
    });

    return () => sr.destroy();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-20 md:py-32 px-4">
      <div className="w-full max-w-6xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-white/5 shadow-2xl rounded-2xl p-8 md:p-12 text-primary dark:text-dark-text flex flex-col md:flex-row gap-12">
        {/* Left Section - Address & Contact Info */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-dark-text mb-4">
              Contact Us
            </h2>
            <p className="text-base md:text-lg font-body text-text-secondary dark:text-dark-textSecondary leading-relaxed">
              We're here to connect with you! Reach out via phone, email, or visit our office.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                icon: <Phone className="w-5 h-5 text-accent" />,
                text: "+251 913 263 030",
              },
              {
                icon: <Mail className="w-5 h-5 text-accent" />,
                text: "info@icapestudio.com",
              },
              {
                icon: <Clock className="w-5 h-5 text-accent" />,
                text: "Mon - Fri: 9:00 AM - 6:00 PM",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-text-secondary dark:text-dark-textSecondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
              >
                {item.icon}
                <span className="text-sm md:text-base font-body font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {[
              {
                href: "mailto:info@icapestudio.com",
                text: "Email Us",
                icon: <ArrowRight className="ml-2 w-4 h-4" />,
              },
              {
                href: "https://t.me/iCAPEConsulting",
                text: "Live Chat",
                icon: <MessageCircle className="ml-2 w-4 h-4" />,
              },
            ].map((btn, index) => (
              <a
                key={index}
                href={btn.href}
                className="flex items-center justify-center bg-primary dark:bg-accent text-secondary-light dark:text-primary px-6 py-3 rounded-lg font-body font-semibold text-sm border border-primary dark:border-accent hover:bg-primary-light dark:hover:bg-accent-alt transition-all duration-300"
              >
                {btn.text} {btn.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 bg-white/5 dark:bg-white/5 p-8 rounded-xl border border-white/10 dark:border-white/5 backdrop-blur-md">
          <h3 className="text-2xl font-heading font-semibold text-primary dark:text-dark-text mb-6">
            Share Your Thoughts
          </h3>
          {submitted ? (
            <div className="p-6 bg-accent/10 border border-accent rounded-lg">
              <p className="text-accent font-body font-medium text-center">
                Thank you! Your message has been sent successfully.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary-light dark:bg-dark-surface text-primary dark:text-dark-text border border-border dark:border-dark-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 font-body"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary-light dark:bg-dark-surface text-primary dark:text-dark-text border border-border dark:border-dark-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 font-body"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-white/5 text-primary dark:text-dark-text border border-white/10 dark:border-white/5 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 font-body resize-none"
                required
              />
              {error && (
                <p className="text-red-500 font-body text-sm">{error}</p>
              )}
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-primary dark:bg-accent text-secondary-light dark:text-primary px-6 py-3.5 rounded-lg font-body font-semibold text-base hover:bg-primary-light dark:hover:bg-accent-alt transition-all duration-300 hover:scale-105"
              >
                Send Feedback <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>

      <Maps />
    </div>
  );
};

export default Contact;
