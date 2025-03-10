import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src="data:image/jpeg;base64,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" 
          alt='logo'  className="w-9 h-9 object-contain rounded-full" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Shivam Tiwari &nbsp;
    
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
