"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { RequestForm } from "@/components/request-form";

export const Footer = () => (
    <footer className="bg-[#1F3C3C] text-white pt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.png" alt="JK Hospital Logo" width={160} height={36} />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              J.K. Hospital and College of Nursing, providing excellent education and multispecialty healthcare, run by the Jabar Singh Kaushalya Devi Charitable Trust.
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
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
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
          <p>&copy; {new Date().getFullYear()} JK Hospital. All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );