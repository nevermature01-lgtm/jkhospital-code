"use client";

import { Navbar } from "@/components/layout/Navbar";

export default function DoctorsPage() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-6xl">
                <h1 className="text-4xl font-bold text-center">Our Doctors</h1>
                <p className="text-center mt-4">Information about our doctors will be available here soon.</p>
            </div>
        </>
    );
}
