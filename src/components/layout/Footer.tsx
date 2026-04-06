"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Siren } from "lucide-react";
import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#1F3C3C] text-white pt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center mb-4">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-white/20 flex items-center justify-center w-fit">
                <Image 
                  src="/logo.png" 
                  alt="JK Hospital Logo" 
                  width={160} 
                  height={36} 
                  style={{ height: "auto" }}
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              J.K. Hospital and College of Nursing, providing excellent education and multispecialty healthcare, run by the Jabar Singh Kaushalya Devi Charitable Trust.
            </p>
          </div>
  
          {/* Column 2: Departments */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Departments</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/departments" className="text-gray-300 hover:text-white">General Surgery</Link></li>
              <li><Link href="/departments" className="text-gray-300 hover:text-white">Gynaecology</Link></li>
              <li><Link href="/departments" className="text-gray-300 hover:text-white">Urology & Kidney Care</Link></li>
              <li><Link href="/departments" className="text-gray-300 hover:text-white">Dentistry & Oral Care</Link></li>
              <li><Link href="/departments" className="text-gray-300 hover:text-white">Orthopedics</Link></li>
              <li><Link href="/departments" className="text-gray-300 hover:text-white">Radiology & Imaging</Link></li>
            </ul>
          </div>
  
          {/* Column 3: Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/doctors" className="text-gray-300 hover:text-white">Our Doctors</Link></li>
              <li><Link href="/departments" className="text-gray-300 hover:text-white">Departments</Link></li>
              <li><Link href="/nursing-college" className="text-gray-300 hover:text-white">Nursing College</Link></li>
              <li><Link href="/blood-bank" className="text-gray-300 hover:text-white">Blood Bank</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Gallery</a></li>
            </ul>
          </div>
  
          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/80 flex-shrink-0" />
                <span>NH92, Vivek Vihar Colony, Datawali, Uttar Pradesh 206002</span>
              </li>
               <li className="flex items-start gap-3">
                <Siren className="h-5 w-5 text-white/80 flex-shrink-0" />
                <div>
                  <span className="text-gray-400">Emergency: </span><a href="tel:+918006005065" className="hover:text-white">+91-8006005065</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-white/80 flex-shrink-0" />
                <div>
                  <span className="text-gray-400">Enquiry: </span><a href="tel:+918006005064" className="hover:text-white">+91-8006005064</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white/80 flex-shrink-0" />
                <div>
                  <span className="text-gray-400">Reception: </span><a href="mailto:Care@jkhospital.in" className="hover:text-white">Care@jkhospital.in</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white/80 flex-shrink-0" />
                <div>
                  <span className="text-gray-400">Nursing: </span><a href="mailto:Nursing@jkhospital.in" className="hover:text-white">Nursing@jkhospital.in</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 py-6 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {year || '2025'} JK Hospital. All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );
};