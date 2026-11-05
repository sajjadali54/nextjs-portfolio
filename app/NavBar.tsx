"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { routes, navLinks } from "@data/routes";

const NavBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");
    const savedTheme =
      storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    document.documentElement.style.colorScheme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const linkVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="glass-navbar"
    >
      <Navbar expand="lg">
        <Container>
          <Link href={routes.home} passHref legacyBehavior>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Navbar.Brand className="d-flex align-items-center logo-container">
                <Image
                  src="/logo.png"
                  alt="Profile"
                  width={50}
                  height={50}
                  className="logo-img"
                />
              </Navbar.Brand>
            </motion.div>
          </Link>

          <div className="d-flex align-items-center gap-3">
            <Button
              variant="outline-secondary"
              className="theme-toggle d-flex align-items-center justify-content-center"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
            </Button>

            <Button
              variant="link"
              className="d-lg-none p-0 menu-toggle"
              aria-label="Open navigation menu"
              aria-expanded={showDrawer}
              onClick={() => setShowDrawer(true)}
            >
              <FiMenu size={24} />
            </Button>
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto align-items-center gap-4">
              {navLinks.map(({ href, label, onClick }) => (
                <motion.div
                  key={`${href}${label}`}
                  whileHover="hover"
                  whileTap="tap"
                  variants={linkVariants}
                >
                  <Link href={href} passHref legacyBehavior>
                    <Nav.Link
                      className="nav-link"
                      active={pathname === href}
                      aria-current={pathname === href ? "page" : undefined}
                      onClick={onClick}
                    >
                      {label}
                    </Nav.Link>
                  </Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={showDrawer}
        onHide={() => setShowDrawer(false)}
        placement="end"
        className="glass-offcanvas"
      >
        <Offcanvas.Header className="border-bottom">
          <Offcanvas.Title className="text-gradient">
            Navigation
          </Offcanvas.Title>
          <Button
            variant="link"
            onClick={() => setShowDrawer(false)}
            className="p-0 menu-close"
            aria-label="Close navigation menu"
          >
            <FiX size={24} />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            {navLinks.map(({ href, label, onClick }, index) => (
              <motion.div
                key={`${href}${label}`}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={href} passHref legacyBehavior>
                  <Nav.Link
                    className="nav-link"
                    active={pathname === href}
                    aria-current={pathname === href ? "page" : undefined}
                    onClick={() => {
                      setShowDrawer(false);
                      if (onClick) onClick();
                    }}
                  >
                    {label}
                  </Nav.Link>
                </Link>
              </motion.div>
            ))}
            <Button
              variant="outline-secondary"
              className="theme-toggle mobile-theme-toggle mt-3"
              onClick={toggleTheme}
            >
              {theme === "light" ? "Switch to dark" : "Switch to light"}
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <style jsx global>{`
        .glass-navbar {
          background: color-mix(in srgb, var(--surface-strong) 94%, transparent);
        }

        .glass-offcanvas {
          background: var(--surface-strong);
          color: var(--foreground);
        }

        .mobile-theme-toggle {
          width: 100%;
        }

        .logo-container {
          position: relative;
          padding: 5px;
        }

        .logo-img {
          border-radius: 50%;
          border: 2px solid transparent;
          box-shadow: 0 0 0 2px var(--primary-soft);
        }

        .logo-container::before {
          content: "";
          position: absolute;
          inset: -2px;
          background: var(--primary);
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-container:hover::before {
          opacity: 1;
        }

        .nav-link {
          color: var(--foreground-soft) !important;
          font-weight: 600;
          position: relative;
          padding: 0.5rem 0 !important;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .theme-toggle,
        .menu-toggle,
        .menu-close {
          border: 1px solid var(--border);
          color: var(--foreground-soft);
          background: var(--surface);
          border-radius: 999px;
        }

        .theme-toggle:hover,
        .menu-toggle:hover,
        .menu-close:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-1px);
        }

        .mobile-theme-toggle {
          width: 100%;
          justify-content: center;
        }

      `}</style>
    </motion.nav>
  );
};

export default NavBar;
