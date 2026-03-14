import { Link } from "react-router-dom";
import Logo from "@/assets/GarkiLogo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#012367] text-gray-300 px-6 md:px-20 lg:px-32 py-12">

      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Brand */}
        <div className="space-y-4">

          <img
            src={Logo}
            alt="Garki HR Tech Logo"
            className="h-15 w-auto"
          />

          <h2 className="text-white text-2xl font-semibold">
            Garki HR Tech
          </h2>

          <p className="max-w-sm text-sm">
            We aim to support businesses in building productive, safe, and legally compliant work environments through expert guidance and reliable HR services.
          </p>

        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-medium">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-[#FA9A2A] transition">Home</Link>
            <Link to="/about" className="hover:text-[#FA9A2A] transition">About Us</Link>
            <Link to="/services" className="hover:text-[#FA9A2A] transition">Services</Link>
            <Link to="/contact" className="hover:text-[#FA9A2A] transition">Contact</Link>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-medium">Our Services</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/services" className="hover:text-[#FA9A2A] transition">Staffing Solutions</Link>
            <Link to="/services" className="hover:text-[#FA9A2A] transition">HR & IR Consulting</Link>
            <Link to="/services" className="hover:text-[#FA9A2A] transition">Compliance Auditing</Link>
            <Link to="/services" className="hover:text-[#FA9A2A] transition">POSH Training</Link>
            <Link to="/services" className="hover:text-[#FA9A2A] transition">Labour Code Implementation</Link>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Garki HR Tech. All rights reserved.
      </div>

    </footer>
  );
}