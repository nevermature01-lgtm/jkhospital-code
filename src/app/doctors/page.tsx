
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const doctors: Array<{ id: string; name: string; title: string; description: string; imageHint: string; imageId?: string; }> = [
    {
        id: "doctor-1",
        name: "Dr. Manoj Yadav",
        title: "General & Laparoscopic Surgery and Urology",
        description: "MBBS, MS, FICS, FAIS, FIAGES, FILHS",
        imageHint: "male doctor"
    },
    {
        id: "doctor-2",
        name: "Dr. Kumar Katreya Yadav",
        title: "General & Laparoscopic Surgery and Urology",
        description: "MBBS, MS",
        imageHint: "male doctor"
    },
    {
        id: "doctor-3",
        name: "Dr. Neha Singh",
        title: "Gynaecology Department",
        description: "MBBS, MS (Obstetrics & Gynaecology)",
        imageHint: "female doctor"
    },
    {
        id: "doctor-4",
        name: "Dr. Madhukar Gupta",
        title: "Urology",
        description: "MCH Urology",
        imageHint: "male doctor"
    },
    {
        id: "doctor-5",
        name: "Dr. Shahini Yadav",
        title: "Dentistry and Oral Care",
        description: "BDS, FMC",
        imageHint: "female doctor"
    },
    {
        id: "doctor-6",
        name: "Dr. Pankaj",
        title: "Orthopedics",
        description: "M.B.B.S, D. ORTH, DNB",
        imageHint: "male doctor"
    },
    {
        id: "doctor-7",
        name: "Dr. ADEEM KHAN",
        title: "General Physician",
        description: "MBBS, MD (Medicine), ACMDC, CCMH",
        imageHint: "male doctor"
    },
    {
        id: "doctor-8",
        name: "Dr. ASHWINI KUMAR YADAV",
        title: "ENT",
        description: "M.B.B.S, MS ENT",
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {doctors.map((doctor) => {
                    const image = doctorImages.find(img => img.id === (doctor.imageId || doctor.id));
                    return (
                        <Card key={doctor.id} className="rounded-[25px] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group h-96">
                            {image ? (
                                <Image
                                    src={image.imageUrl}
                                    alt={`Portrait of ${doctor.name}`}
                                    fill
                                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={doctor.imageHint}
                                />
                            ) : (
                                <div className="w-full h-full bg-muted" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end h-full">
                                <div>
                                    <h3 className="text-xl font-bold">{doctor.name}</h3>
                                    <p className="text-base font-medium text-primary-foreground/80 mb-2">{doctor.title}</p>
                                    <p className="text-sm text-primary-foreground/70">{doctor.description}</p>
                                </div>
                            </div>
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
