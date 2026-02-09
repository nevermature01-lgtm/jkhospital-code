"use client";

import { Mail, Phone } from "lucide-react";

export const TopBar = () => (
    <div className="bg-[#1F3C3C] text-gray-300 text-xs font-medium">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center h-auto sm:h-10 py-2 sm:py-0 gap-x-8 gap-y-2">
        <a href="mailto:Nursing@jkhospital.in" className="flex items-center gap-2 hover:text-white">
          <Mail className="h-4 w-4" />
          <span>Nursing@jkhospital.in</span>
        </a>
        <a href="mailto:Care@jkhospital.in" className="flex items-center gap-2 hover:text-white">
          <Mail className="h-4 w-4" />
          <span>Care@jkhospital.in</span>
        </a>
        <a href="tel:+918006005061" className="flex items-center gap-2 hover:text-white">
          <Phone className="h-4 w-4" />
          <span>+91-8006005061</span>
        </a>
        <a href="tel:+918006005064" className="flex items-center gap-2 hover:text-white">
          <Phone className="h-4 w-4" />
          <span>+91-8006005064</span>
        </a>
        <a href="tel:+918006005065" className="flex items-center gap-2 hover:text-white">
          <Phone className="h-4 w-4" />
          <span>+91-8006005065</span>
        </a>
      </div>
    </div>
  );
