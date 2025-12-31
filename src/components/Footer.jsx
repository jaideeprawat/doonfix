import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Doon<span className="text-green-500">Fix</span>
          </h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            Fast & reliable home services
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-2 text-gray-700">
          <p className="text-sm text-gray-600">📍 Banjarawala, Dehradun</p>
          <p className="text-sm text-gray-600">
            📞{" "}
            <a
              href="tel:+919084437614"
              className="font-medium text-gray-900 hover:underline"
            >
              +91 90844 37614
            </a>
          </p>
          <p className="text-sm text-gray-600">📧 info@doonfix.in</p>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-900 mb-3">
            Follow Us
          </h4>

          <div className="flex gap-4">
            <SocialIcon
              href="https://www.instagram.com/doonfixhome?igsh=cWFkcjM5aWtzczJs"
              label="Instagram"
            >
              <FaInstagram size={18} />
            </SocialIcon>

            <SocialIcon
              href="https://www.facebook.com/share/14Rsy5BnJTw/"
              label="Facebook"
            >
              <FaFacebook size={18} />
            </SocialIcon>

            <SocialIcon
              href="https://wa.me/919084437614?text=Hi DoonFix 👋%0AI want to book a service."
              label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </SocialIcon>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <p className="mt-8 text-center text-sm text-gray-500">
        © 2025 DoonFix. All rights reserved.
      </p>
    </footer>
  );
}

/* Reusable Social Icon */
function SocialIcon({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        w-10 h-10
        flex items-center justify-center
        rounded-full
        border border-gray-300
        text-gray-700
        hover:text-green-600
        hover:border-green-500
        hover:scale-110
        transition
      "
    >
      {children}
    </a>
  );
}
