"use client";

import { Mail, Phone } from "lucide-react";

export const TopBar = () => (
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