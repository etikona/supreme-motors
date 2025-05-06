"use client";

import Link from "next/link";
import { useState } from "react";
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
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/new-cars", label: "New Cars" },
  { href: "/used-cars", label: "Used Cars" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-gray-50 sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-blue-600">
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-blue-600">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left text-lg font-bold text-blue-600">
                CarHub
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-base font-medium text-gray-700 hover:text-blue-600"
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
