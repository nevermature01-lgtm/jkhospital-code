"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
    <div className={cn(
        "w-full py-4 px-4 sm:px-6 lg:px-8",
        isHomePage && "absolute sm:static top-0 left-0 right-0 z-10"
    )}>
      <div className="container max-w-7xl mx-auto">
        <div className={cn(
            "bg-[#2FAE9B] rounded-full flex justify-between items-center p-3 px-6 shadow-md"
        )}>
          <Link
            href="/"
            className="flex items-center"
          >
            <Image src="/logo.png" alt="JK Hospital Logo" width={140} height={32} />
          </Link>
          
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-white">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About Us
            </Link>
            <Link href="/services" className="hover:text-gray-200">
              Services
            </Link>
            <Link href="/doctors" className="hover:text-gray-200">
              Our Doctors
            </Link>
            <Link href="/departments" className="hover:text-gray-200">
              Departments
            </Link>
            <Link href="/nursing-college" className="hover:text-gray-200">
              Nursing College
            </Link>
            <Link href="/blood-bank" className="hover:text-gray-200">
              Blood Bank
            </Link>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
            <Link href="#" className="hover:text-gray-200">
              Gallery
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="hidden sm:flex rounded-full bg-white hover:bg-white/90 shadow-md text-[#1F3C3C]">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
  
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex h-full flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center mb-4">
                    <Image src="/logo.png" alt="JK Hospital Logo" width={140} height={32} />
                  </Link>
                  <nav className="flex flex-col gap-4 text-lg font-medium">
                    <Link href="/" className="hover:text-[#2fa693] py-2">
                      Home
                    </Link>
                    <Link href="/about" className="hover:text-[#2fa693] py-2">
                      About Us
                    </Link>
                    <Link href="/services" className="hover:text-[#2fa693] py-2">
                      Services
                    </Link>
                    <Link href="/doctors" className="hover:text-[#2fa693] py-2">
                      Our Doctors
                    </Link>
                    <Link href="/departments" className="hover:text-[#2fa693] py-2">
                      Departments
                    </Link>
                    <Link href="/nursing-college" className="hover:text-[#2fa693] py-2">
                      Nursing College
                    </Link>
                    <Link href="/blood-bank" className="hover:text-[#2fa693] py-2">
                      Blood Bank
                    </Link>
                    <Link href="/contact" className="hover:text-[#2fa693] py-2">
                      Contact
                    </Link>
                    <Link href="#" className="hover:text-[#2fa693] py-2">
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
