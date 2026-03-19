"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
    <div className={cn(
        "w-full py-4 px-4 sm:px-6 lg:px-8",
        isHomePage && "absolute sm:static top-0 left-0 right-0 z-20"
    )}>
      <div className="container max-w-7xl mx-auto">
        <div className={cn(
            "rounded-full flex justify-between items-center p-3 px-6",
            "bg-white/25 backdrop-blur-[24px]",
            "border border-white/30",
            "shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
        )}>
          <Link
            href="/"
            className="flex items-center"
          >
            <div className="bg-white p-2 rounded-lg shadow-sm border border-white/50 flex items-center justify-center">
              <Image src="/logo.png" alt="JK Hospital Logo" width={140} height={32} />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-4 text-sm font-bold text-[#1F3C3C]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/doctors" className="hover:text-white transition-colors">
              Our Doctors
            </Link>
            <Link href="/departments" className="hover:text-white transition-colors">
              Departments
            </Link>
            <Link href="/nursing-college" className="hover:text-white transition-colors">
              Nursing College
            </Link>
            <Link href="/blood-bank" className="hover:text-white transition-colors">
              Blood Bank
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Gallery
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="hidden sm:flex rounded-full bg-[#1F3C3C] hover:bg-[#1F3C3C]/90 shadow-md text-white border-none">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
  
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" className="bg-white/90 text-[#2FAE9B] hover:bg-white rounded-full shadow-md">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white/95 backdrop-blur-xl border-l-white/20">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Access hospital departments, services, and contact information.</SheetDescription>
                <div className="flex h-full flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center mb-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center w-fit">
                      <Image src="/logo.png" alt="JK Hospital Logo" width={140} height={32} />
                    </div>
                  </Link>
                  <nav className="flex flex-col gap-4 text-lg font-medium">
                    <Link href="/" className="hover:text-[#2fa693] py-2 transition-colors">
                      Home
                    </Link>
                    <Link href="/about" className="hover:text-[#2fa693] py-2 transition-colors">
                      About Us
                    </Link>
                    <Link href="/doctors" className="hover:text-[#2fa693] py-2 transition-colors">
                      Our Doctors
                    </Link>
                    <Link href="/departments" className="hover:text-[#2fa693] py-2 transition-colors">
                      Departments
                    </Link>
                    <Link href="/nursing-college" className="hover:text-[#2fa693] py-2 transition-colors">
                      Nursing College
                    </Link>
                    <Link href="/blood-bank" className="hover:text-[#2fa693] py-2 transition-colors">
                      Blood Bank
                    </Link>
                    <Link href="/contact" className="hover:text-[#2fa693] py-2 transition-colors">
                      Contact
                    </Link>
                    <Link href="#" className="hover:text-[#2fa693] py-2 transition-colors">
                      Gallery
                    </Link>
                  </nav>
                  <Button asChild className="rounded-full bg-[#2fa693] hover:bg-[#2fa693]/90 shadow-md text-white mt-4">
                    <Link href="/contact">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};