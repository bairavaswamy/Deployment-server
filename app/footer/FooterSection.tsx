import React from "react";
import Link from "next/link";

interface FooterItem {
  name: string;
  icon: React.ReactNode;
  link: string;
}

interface FooterSectionProps {
  title: string;
  items: FooterItem[];
  iconColor: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items, iconColor }) => {
  const sectionId = title.replace(/\s+/g, '-').toLowerCase() + "-heading";

  return (
    <section aria-labelledby={sectionId}>
      <h3 id={sectionId} className="text-lg font-semibold text-white mb-3">
        {title}
      </h3>
      <ul className="space-y-2 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-center space-x-2">
            <span className={iconColor} aria-hidden="true">{item.icon}</span>
            <Link href={item.link} className="hover:text-white transition-colors duration-200">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterSection;
