"use client";

import Image from "next/image";
import {
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Menu,
  Mail,
  Phone,
  Goal,
  Eye,
  Gem,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RequestForm } from "@/components/request-form";

const TopBar = () => (
    <div className="bg-[#1F3C3C] text-gray-300 text-xs font-medium">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center h-auto sm:h-10 py-2 sm:py-0 gap-x-8 gap-y-2">
        <a href="mailto:info@mindcare.com" className="hidden sm:flex items-center gap-2 hover:text-white">
          <Mail className="h-4 w-4" />
          <span>info@mindcare.com</span>
        </a>
        <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white">
          <Phone className="h-4 w-4" />
          <span>+1 234 567 890</span>
        </a>
        <a href="tel:+1098765432" className="flex items-center gap-2 hover:text-white">
          <Phone className="h-4 w-4" />
          <span>+1 098 765 432</span>
        </a>
      </div>
    </div>
  );

const Navbar = () => (
    <div className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="bg-[#2FAE9B] rounded-full flex justify-between items-center p-3 px-6 shadow-md">
          <Link
            href="/"
            className="flex items-center"
          >
            <Image src="/logo.png" alt="MindCare Logo" width={140} height={32} />
          </Link>
          
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-white">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About Us
            </Link>
            <Link href="#" className="hover:text-gray-200">
              Services
            </Link>
            <Link href="#" className="hover:text-gray-200">
              Departments
            </Link>
            <Link href="#" className="hover:text-gray-200">
              Nursing College
            </Link>
            <Link href="#" className="hover:text-gray-200">
              Blood Bank
            </Link>
            <Link href="#" className="hover:text-gray-200">
              Contact
            </Link>
            <Link href="#" className="hover:text-gray-200">
              Gallery
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button className="hidden sm:flex rounded-full bg-white hover:bg-white/90 shadow-md text-[#1F3C3C]">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
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
                    <Image src="/logo.png" alt="MindCare Logo" width={140} height={32} />
                  </Link>
                  <nav className="flex flex-col gap-4 text-lg font-medium">
                    <Link href="/" className="hover:text-[#2fa693] py-2">
                      Home
                    </Link>
                    <Link href="/about" className="hover:text-[#2fa693] py-2">
                      About Us
                    </Link>
                    <Link href="#" className="hover:text-[#2fa693] py-2">
                      Services
                    </Link>
                    <Link href="#" className="hover:text-[#2fa693] py-2">
                      Departments
                    </Link>
                    <Link href="#" className="hover:text-[#2fa693] py-2">
                      Nursing College
                    </Link>
                    <Link href="#" className="hover:text-[#2fa693] py-2">
                      Blood Bank
                    </Link>
                    <Link href="#" className="hover:text-[#2fa693] py-2">
                      Contact
                    </Link>
                    <Link href="#" className="hover:text-[#2fa693] py-2">
                      Gallery
                    </Link>
                  </nav>
                  <Button className="rounded-full bg-[#2fa693] hover:bg-[#2fa693]/90 shadow-md text-white mt-4">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );

const Footer = () => (
    <footer className="bg-[#1F3C3C] text-white pt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.png" alt="MindCare Logo" width={160} height={36} />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              MindCare is your trusted partner in mental wellness, offering expert care in a compassionate and supportive environment.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
  
          {/* Column 2: Departments */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Departments</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">General Surgery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Gynaecology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Urology & Kidney Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Dentistry & Oral Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Orthopedics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Radiology & Imaging</a></li>
            </ul>
          </div>
  
          {/* Column 3: Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Departments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Nursing College</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blood Bank</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Gallery</a></li>
            </ul>
          </div>
  
          {/* Column 4: Request a Callback */}
          <div className="space-y-4 bg-[#2fa693]/20 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-white">Request a Callback</h3>
            <p className="text-gray-300 text-sm">
              Enter your details and we'll call you back to schedule an appointment.
            </p>
            <RequestForm />
          </div>
        </div>
        
        <div className="mt-16 py-6 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} MindCare. All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );

const AboutUsContent = () => {
    const aboutImage = PlaceHolderImages.find(
      (img) => img.id === "about-us-clinic"
    );
  
    const coreValues = [
      {
        icon: <Goal className="h-6 w-6 text-white" />,
        title: "Our Mission",
        description:
          "To provide accessible, high-quality mental health care that empowers individuals to achieve emotional well-being and live fulfilling lives.",
      },
      {
        icon: <Eye className="h-6 w-6 text-white" />,
        title: "Our Vision",
        description:
          "A community where mental health is a priority, and everyone has the support they need to thrive in a compassionate and understanding society.",
      },
      {
        icon: <Gem className="h-6 w-6 text-white" />,
        title: "Our Value",
        description:
          "We are committed to integrity, empathy, and respect in all our interactions, ensuring a safe and confidential space for healing and growth.",
      },
    ];
  
    return (
      <section className="bg-background py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <p className="text-[#2FAE9B] font-semibold uppercase tracking-wider mb-2">
                Who We Are
              </p>
              <h2 className="text-4xl font-bold text-[#1F3C3C] mb-4">
                About Our Center <span className="text-[#2FAE9B]">MindCare</span>
              </h2>
              <div className="space-y-4 text-[#555] text-base leading-relaxed mb-8">
                <p>
                  At MindCare, we are dedicated to providing compassionate and
                  comprehensive mental health care. Our experienced team of
                  certified specialists is committed to supporting you on your
                  journey to wellness.
                </p>
              </div>
              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2FAE9B] flex items-center justify-center">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1F3C3C] mb-1">
                        {value.title}
                      </h3>
                      <p className="text-[#555] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={550}
                  height={550}
                  className="rounded-[25px] shadow-lg object-cover w-full h-auto"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };


export default function AboutPage() {
    return (
      <div className="bg-background min-h-screen text-foreground font-sans">
        <TopBar />
        <Navbar />
        <main>
            <AboutUsContent />
        </main>
        <Footer />
      </div>
    );
  }
