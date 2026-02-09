"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const doctors = [
    {
        id: "doctor-1",
        name: "Dr. Manoj Yadav",
        title: "General & Laparoscopic Surgery and Urology",
        description: "MBBS, MS, FICS, FAIS, FIAGES, FILHS. A leading surgeon with extensive experience.",
        imageHint: "male doctor"
    },
    {
        id: "doctor-2",
        name: "Dr. Kumar Katreya Yadav",
        title: "General & Laparoscopic Surgery and Urology",
        description: "MBBS, MS. Specialist in minimally invasive surgical techniques.",
        imageHint: "male doctor"
    },
    {
        id: "doctor-3",
        name: "Dr. Neha Singh",
        title: "Gynaecology Department",
        description: "MBBS, MS (Obstetrics & Gynaecology). Dedicated to women's health and wellness.",
        imageHint: "female doctor"
    },
    {
        id: "doctor-4",
        name: "Dr. Madhukar Gupta",
        title: "Urology",
        description: "MCH Urology. Expert in kidney and urinary tract diseases.",
        imageHint: "male doctor"
    },
    {
        id: "doctor-5",
        name: "Dr. Shahini Yadav",
        title: "Dentistry and Oral Care",
        description: "BDS, FMC. Committed to providing excellent dental care.",
        imageHint: "female doctor"
    },
    {
        id: "doctor-6",
        name: "Dr. Pankaj",
        title: "Orthopedics",
        description: "M.B.B.S, D. ORTH, DNB. Specialist in bone and joint health.",
        imageHint: "male doctor"
    },
    {
        id: "doctor-7",
        name: "Dr. ADEEM KHAN",
        title: "General Physician",
        description: "MBBS, MD (Medicine), ACMDC, CCMH. Focused on comprehensive patient care.",
        imageHint: "male doctor"
    },
    {
        id: "doctor-8",
        name: "Dr. ASHWINI KUMAR YADAV",
        title: "ENT",
        description: "M.B.B.S, MS ENT. Specializing in ear, nose, and throat conditions.",
        imageHint: "male doctor"
    }
];

const DoctorsPageContent = () => {
    const doctorImages = PlaceHolderImages.filter(img => img.id.startsWith('doctor-'));

    return (
        <section className="bg-background py-20">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-[#2FAE9B] font-semibold uppercase tracking-wider mb-2">Meet Our</p>
                <h2 className="text-4xl font-bold text-[#1F3C3C] mb-12">Expert Doctors</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                {doctors.map((doctor) => {
                    const image = doctorImages.find(img => img.id === doctor.id);
                    return (
                    <Card key={doctor.id} className="rounded-[25px] p-6 pt-10 shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center justify-center">
                        <div className="relative inline-block mb-5">
                        {image && (
                            <div className="absolute inset-0 bg-[#2FAE9B] rounded-full -m-1"></div>
                        )}
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt={`Portrait of ${doctor.name}`}
                                width={140}
                                height={140}
                                className="rounded-full object-cover relative z-10 border-4 border-white"
                                data-ai-hint={doctor.imageHint}
                            />
                        )}
                        </div>
                        <h3 className="text-xl font-bold text-[#1F3C3C] mb-1">{doctor.name}</h3>
                        <p className="text-[#2FAE9B] text-sm font-medium mb-3">{doctor.title}</p>
                        <p className="text-sm text-[#666] leading-relaxed">{doctor.description}</p>
                    </Card>
                    );
                })}
                </div>
            </div>
        </section>
    );
};

export default function DoctorsPage() {
    return (
        <>
            <Navbar />
            <DoctorsPageContent />
        </>
    );
}
