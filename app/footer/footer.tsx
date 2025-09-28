import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaDove, FaShieldAlt, FaBlog, FaQuestionCircle 
} from "react-icons/fa";
import { MdPrivacyTip, MdPolicy } from "react-icons/md";
import { GiBrickWall, GiFactory, GiPoolDive } from "react-icons/gi";
import Link from "next/link";

const pigeonBirdNets = [
  { name: "Pigeon Safety Nets", icon: <FaDove />, link: "/solutions/pigeon-safety-nets" },
  { name: "Anti Bird Nets", icon: <FaDove />, link: "/solutions/anti-bird-nets" },
  { name: "Bird Nets for Balconies", icon: <FaDove />, link: "/solutions/bird-nets-for-balconies" },
  { name: "Bird Netting Service", icon: <FaDove />, link: "/solutions/bird-netting-service" },
  { name: "Bird Protection Nets", icon: <FaDove />, link: "/solutions/bird-protection-nets" },
  { name: "Pigeon Nets Installation", icon: <FaDove />, link: "/solutions/pigeon-nets-installation" },
  { name: "Pigeon and Bird Spikes", icon: <FaDove />, link: "/solutions/pigeon-bird-spikes" },
];

const safetyNets = [
  { name: "Building Safety Nets", icon: <GiBrickWall />, link: "/solutions/building-safety-nets" },
  { name: "Car Parking Safety Nets", icon: <FaShieldAlt />, link: "/solutions/car-parking-safety-nets" },
  { name: "Children Safety Nets", icon: <FaShieldAlt />, link: "/solutions/children-safety-nets" },
  { name: "Construction Safety Nets", icon: <FaShieldAlt />, link: "/solutions/construction-safety-nets" },
  { name: "Industrial Safety Nets", icon: <GiFactory />, link: "/solutions/industrial-safety-nets" },
  { name: "Pets Safety Nets", icon: <FaShieldAlt />, link: "/solutions/pets-safety-nets" },
  { name: "Swimming Pool Safety Nets", icon: <GiPoolDive />, link: "/solutions/swimming-pool-safety-nets" },
];

const resources = [
  { name: "Blog", icon: <FaBlog />, link: "/blog" },
  { name: "FAQs", icon: <FaQuestionCircle />, link: "/faqs" },
  { name: "Privacy Policy", icon: <MdPrivacyTip />, link: "/privacy-policy" },
  { name: "Terms & Conditions", icon: <MdPolicy />, link: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Company Info (Horizontal) */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-2 md:space-y-0 md:space-x-4">
          <h2 className="text-2xl font-bold text-white">Servanisafety Nets
</h2>
          <p className="text-sm max-w-2xl">
            — Safeguarding homes, offices, and communities with premium safety nets, 
            pigeon protection solutions, and invisible grills. 
            Your safety, our priority.
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Pigeon & Bird Nets */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Pigeon & Bird Nets</h3>
            <ul className="space-y-2 text-sm">
              {pigeonBirdNets.map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-blue-400">{item.icon}</span>
                  <Link href={item.link} className="hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Nets */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Safety Nets</h3>
            <ul className="space-y-2 text-sm">
              {safetyNets.map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-green-400">{item.icon}</span>
                  <Link href={item.link} className="hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              {resources.map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-yellow-400">{item.icon}</span>
                  <Link href={item.link} className="hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Servanisafety Nets
. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/share/177w7231SD/" target="_blank" className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <FaFacebookF className="text-white w-4 h-4" />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-sky-500 transition">
              <FaTwitter className="text-white w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/servanisafetynets?igsh=MTljMjNrdWw2dXo4aA== " target="_blank" className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition">
              <FaInstagram className="text-white w-4 h-4" />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition">
              <FaLinkedinIn className="text-white w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
