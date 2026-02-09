"use client";

import * as React from "react";
import {
  Siren,
  Microscope,
  Pill,
  PersonStanding,
  Stethoscope,
  Phone,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

const ServicesContent = () => {
    const services = [
      {
        icon: <Siren className="h-6 w-6 text-[#2FAE9B]" />,
        title: "Emergency Care",
        description: "24/7 Emergency Services With Rapid Response Teams Ready To Provide Immediate Medical Attention.",
      },
      {
        icon: <Microscope className="h-6 w-6 text-[#2FAE9B]" />,
        title: "Laboratory Services",
        description: "State-Of-The-Art Diagnostic Laboratory Offering Comprehensive Testing With Quick And Accurate Results.",
      },
      {
        icon: <Pill className="h-6 w-6 text-[#2FAE9B]" />,
        title: "Pharmaceutical Services",
        description: "Fully Stocked Pharmacy Providing Prescribed Medications And Expert Pharmaceutical Advice.",
      },
      {
        icon: <PersonStanding className="h-6 w-6 text-[#2FAE9B]" />,
        title: "Rehabilitation",
        description: "Comprehensive Rehabilitation Programs Designed To Help Patients Regain Independence And Functionality.",
      },
      {
        icon: <Phone className="h-6 w-6 text-[#2FAE9B]" />,
        title: "24/7 Support",
        description: "Round-The-Clock Medical Assistance And Support For All Your Healthcare Needs.",
      },
      {
        icon: <Stethoscope className="h-6 w-6 text-[#2FAE9B]" />,
        title: "Health Check-ups",
        description: "Comprehensive Health Screenings And Preventive Care Services For Early Detection And Intervention.",
      },
    ];
  
    return (
        <section className="bg-muted py-20">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#1F3C3C]">
                    Our Services
                </h2>
                <p className="text-lg text-[#555] mt-4 max-w-2xl mx-auto">
                    We provide a wide range of high-quality medical services to meet all your healthcare needs.
                </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#2FAE9B]/10 flex items-center justify-center mb-4">
                        {React.cloneElement(service.icon, {className: "h-8 w-8 text-[#2FAE9B]"})}
                    </div>
                    <h3 className="text-xl font-bold text-[#1F3C3C] mb-2">{service.title}</h3>
                    <p className="text-[#555] leading-relaxed">{service.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};


export default function ServicesPage() {
    return (
      <>
        <Navbar />
        <ServicesContent />
      </>
    );
  }
