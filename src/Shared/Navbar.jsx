"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/new-cars", label: "New Cars" },
  { href: "/used-cars", label: "Used Cars" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center justify-between px-4 md:px-6 py-2 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
          : "bg-transparent backdrop-blur-none border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center hover:scale-105 transition-transform duration-200"
      >
        <Image
          src={logo}
          alt="Supreme Motors Logo"
          width={60}
          height={60}
          className="w-12 md:w-16 h-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-orange-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled ? "text-gray-800" : "text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 hover:bg-gray-100 ${
                isScrolled ? "text-gray-800" : "text-gray-100"
              }`}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs bg-white/90 backdrop-blur-md"
          >
            <SheetHeader>
              <SheetTitle className="text-left">
                <Image
                  src={logo}
                  alt="Supreme Motors Logo"
                  width={80}
                  height={40}
                  className="w-32 h-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 px-4 text-base font-medium text-gray-700 hover:bg-gray-50/50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
