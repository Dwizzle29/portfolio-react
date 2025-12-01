import React from "react";
import { NavLink } from "react-router-dom";
import PillNav from "./pillNav.tsx";
import logo from "../assets/MD-Init.png";

export default function Navigation() {
  return (
    <>
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Contact", href: "/contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#638DE1"
        pillColor="#e5eaea"
        hoveredPillTextColor="#e5eaea"
        pillTextColor="#4D66F3"
      />
    </>
  );
}
