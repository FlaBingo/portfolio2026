import React from "react";

const navLinks = [
  { href: "#about", label: "About"},
  { href: "#projects", label: "Projects"},
  { href: "#experience", label: "Experience"},
  { href: "#testimonials", label: "Testimonials"},
]

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-5 px-4 bg-transparent">
      <nav className="container mx-auto">
        <a className="font-bold text-xl">
          Flabingo<span className="text-primary text-2xl">.</span>
        </a>

        {/* Desktop Nav */}
        <div>
          <div>
            {navLinks.map((link, index) => (
              <a href={link.href} key={index}>{link.label}</a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
