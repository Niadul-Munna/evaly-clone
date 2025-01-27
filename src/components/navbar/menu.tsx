import { HomeIcon, List, Store } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface MenuProps {
  menu: string;
  href: string;
  icon: ReactNode;
}

const links: MenuProps[] = [
  {
    menu: "Home",
    href: "/",
    icon: <HomeIcon size={18} />,
  },
  { menu: "Shops", href: "/shops", icon: <Store size={18} /> },
  { menu: "Catagories", href: "/catagories", icon: <List size={18} /> },
];
const Menu = () => {
  return (
    <div>
      <ul className="flex items-center gap-10">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className="flex items-center gap-2 font-semibold text-slate-700"
              href={link.href}
            >
              {link.icon} {link.menu}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
