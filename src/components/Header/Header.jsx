import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../../assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "#",
    submenu: [
      { name: "Axial Fans", href: "/products/axial-fans" },
      { name: "Mobility Fans", href: "/products/mobility-fans" },
      { name: "Backward Curved Centrifugal Fan", href: "#" },
      {
        name: "Forward Curves Centrifugal Fan",
        href: "#",
        submenu: [
          { name: "Double Inlet Centrifugal Fans", href: "/products/forward-curves-centrifugal-fan/double-inlet-centrifugal-fans" },
          { name: "Single Inlet Centrifugal Fans", href: "#" },
        ],
      },
      { name: "Compact Fan", href: "#" },
      { name: "Box Fan (For Refrigeration)", href: "#" },
    ],
  },
  {
    name: "Industry",
    href: "#",
    submenu: [
      { name: "Data center", href: "#" },
      { name: "Energy & Environment", href: "#" },
      { name: "Fan Renovation", href: "#" },
      { name: "Ventilation & Purification", href: "#" },
      { name: "Medical Purification", href: "#" },
    ],
  },
  { name: "News Centre", href: "#" },
  { name: "Support", href: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [openMenus, setOpenMenus] = useState({});

  const toggleSubMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1FA54D] py-3 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 flex justify-end items-center">
          <ul className="flex gap-6">
            <li><Link to="#">Blogs</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link to="/" className="p-2">
              <img src={Logo} alt="Logo" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {navigation.map((item, index) => {
                const isActive = location.pathname === item.href ||
                  (item.submenu && item.submenu.some(sub => location.pathname === sub.href));

                return (
                  <div key={index} className="relative group">
                    <Link
                      to={item.href}
                      className={`flex items-center px-1 mx-2 py-2 text-base transition-colors duration-200 ${
                        isActive ? "text-[#030303] border-b-3 border-[#FF0000]" : "text-[#030303] hover:text-[#FF0000]"
                      }`}
                    >
                      {item.name}
                      {item.submenu && <MdKeyboardArrowDown className="ml-1" />}
                    </Link>

                    {item.submenu && (
                      <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg z-10 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
                        {item.submenu.map((subItem, subIndex) => (
                          <div key={subIndex} className="relative group/sub">
                            {subItem.submenu ? (
                              <>
                                <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                  {subItem.name}
                                  <MdKeyboardArrowDown className="ml-2" />
                                </div>
                                <div className="absolute left-full top-0 mt-0 w-64 bg-white shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-20">
                                  {subItem.submenu.map((child, childIndex) => (
                                    <Link
                                      key={childIndex}
                                      to={child.href}
                                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <Link
                                to={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Toggle Icon */}
            <button onClick={toggleMenu} className="md:hidden text-gray-600">
              {menuOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform ${
  menuOpen ? "translate-x-0" : "-translate-x-full"
} transition-transform duration-300 ease-in-out md:hidden`}>
  <ul className="mt-12 px-4 space-y-4">
  {navigation.map((item, index) => {
    const hasSubmenu = !!item.submenu;
    const isOpen = openMenus[`main-${index}`];

    const handleMainClick = () => {
      if (hasSubmenu) {
        toggleSubMenu(`main-${index}`);
      } else {
        setMenuOpen(false);
      }
    };

    return (
      <li key={index}>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleMainClick}
        >
          <span
            className={`text-base py-2 ${isOpen ? "text-[#469E8E]" : "text-gray-700"}`}
          >
            {item.name}
          </span>
          {hasSubmenu && (
            <MdKeyboardArrowDown
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </div>

        {/* Submenu */}
        {hasSubmenu && isOpen && (
          <ul className="pl-4 space-y-1">
            {item.submenu.map((subItem, subIndex) => {
              const hasChildSubmenu = !!subItem.submenu;
              const isSubOpen = openMenus[`sub-${index}-${subIndex}`];

              const handleSubClick = () => {
                if (hasChildSubmenu) {
                  toggleSubMenu(`sub-${index}-${subIndex}`);
                } else {
                  setMenuOpen(false);
                }
              };

              return (
                <li key={subIndex}>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={handleSubClick}
                  >
                    <span className="text-sm text-gray-600 py-1">
                      {subItem.name}
                    </span>
                    {hasChildSubmenu && (
                      <MdKeyboardArrowDown
                        className={`transform transition-transform duration-300 ${
                          isSubOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Nested Submenu */}
                  {hasChildSubmenu && isSubOpen && (
                    <ul className="pl-4 space-y-1">
                      {subItem.submenu.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            to={child.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-sm text-gray-500"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  })}
</ul>
</div>
      </header>
    </>
  );
};

export default Header;
