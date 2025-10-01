import React from "react";
import dynamic from "next/dynamic";
import { FaDove, FaShieldAlt, FaBlog, FaQuestionCircle } from "react-icons/fa";
import { GiBrickWall, GiFactory, GiPoolDive } from "react-icons/gi";
import { MdPrivacyTip, MdPolicy } from "react-icons/md";

const FooterCompanyInfo = dynamic(() => import("./FooterCompantInfo"), { ssr: true });
const FooterSection = dynamic(() => import("./FooterSection"), { ssr: true });
const FooterBottom = dynamic(() => import("./FooterBottom"), { ssr: true });

interface FooterItem {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const pigeonBirdNets: FooterItem[] = [
  { name: "Pigeon Safety Nets", icon: <FaDove />, link: "/solutions/pigeon-safety-nets" },
  { name: "Anti Bird Nets", icon: <FaDove />, link: "/solutions/anti-bird-nets" },
  { name: "Bird Nets for Balconies", icon: <FaDove />, link: "/solutions/bird-nets-for-balconies" },
  { name: "Bird Netting Service", icon: <FaDove />, link: "/solutions/bird-netting-service" },
  { name: "Bird Protection Nets", icon: <FaDove />, link: "/solutions/bird-protection-nets" },
  { name: "Pigeon Nets Installation", icon: <FaDove />, link: "/solutions/pigeon-nets-installation" },
  { name: "Pigeon and Bird Spikes", icon: <FaDove />, link: "/solutions/pigeon-bird-spikes" },
];

const safetyNets: FooterItem[] = [
  { name: "Building Safety Nets", icon: <GiBrickWall />, link: "/solutions/building-safety-nets" },
  { name: "Car Parking Safety Nets", icon: <FaShieldAlt />, link: "/solutions/car-parking-safety-nets" },
  { name: "Children Safety Nets", icon: <FaShieldAlt />, link: "/solutions/children-safety-nets" },
  { name: "Construction Safety Nets", icon: <FaShieldAlt />, link: "/solutions/construction-safety-nets" },
  { name: "Industrial Safety Nets", icon: <GiFactory />, link: "/solutions/industrial-safety-nets" },
  { name: "Pets Safety Nets", icon: <FaShieldAlt />, link: "/solutions/pets-safety-nets" },
  { name: "Swimming Pool Safety Nets", icon: <GiPoolDive />, link: "/solutions/swimming-pool-safety-nets" },
];

const resources: FooterItem[] = [
  { name: "Blog", icon: <FaBlog />, link: "/blog" },
  { name: "FAQs", icon: <FaQuestionCircle />, link: "/faqs" },
  { name: "Privacy Policy", icon: <MdPrivacyTip />, link: "/privacy-policy" },
  { name: "Terms & Conditions", icon: <MdPolicy />, link: "/terms-and-conditions" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <FooterCompanyInfo />

        <hr className="my-6 border-gray-700" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FooterSection title="Pigeon & Bird Nets" items={pigeonBirdNets} iconColor="text-blue-400" />
          <FooterSection title="Safety Nets" items={safetyNets} iconColor="text-green-400" />
          <FooterSection title="Resources" items={resources} iconColor="text-yellow-400" />
        </div>

        <hr className="my-6 border-gray-700" />

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
