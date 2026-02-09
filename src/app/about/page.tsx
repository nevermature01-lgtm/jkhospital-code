"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";

const AboutUsContent = () => {
    return (
      <section className="bg-background py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <p className="text-[#2FAE9B] font-semibold uppercase tracking-wider">
                About Us
              </p>
              <h2 className="text-4xl font-bold text-[#1F3C3C]">
                JK Hospital
              </h2>
              <div className="space-y-4 text-[#555] text-base leading-relaxed">
                <p>
                  The J.K. College of Nursing has a highly appreciated teaching
                  facility, who believes that good education is the root of a
                  highly successful professional career. The college conducts
                  regular examinations; so that the students have a feedback and
                  can work harder to get better. The teaching methods adopted
                  promote multi disciplinary inquiry and practical applications of
                  problems. Interactive methods of teaching are employed so that
                  there is a high degree of interaction between the students and
                  the teacher in the classroom.
                </p>
                <p>
                  The parent 150 bedded J.K. Hospital has well equipped
                  multispecialty hospital with advanced clinical facilities so
                  that the nursing students can learn latest trends and
                  technology in health care thus enrich their excellence in
                  nursing profession.
                </p>
                <p>
                  The college is run by the Jabar Singh Kaushalya Devi Charitable
                  Trust. The entire trust structure consists of people who are
                  having experience in diverse professional fields such as
                  medicine, health care, etc; it is this professional excellence
                  that has made the college and students realize their excellence
                  in various professional fields.
                </p>
              </div>
            </div>
            <div className="space-y-8 mt-10 lg:mt-0">
              <div className="bg-[#1F3C3C] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold mb-4 text-center">
                  Our Vision
                </h3>
                <p className="leading-relaxed text-center text-gray-200">
                  To Be The Premier Healthcare Institution, Recognized For
                  Clinical Excellence, Technological Innovation, And Unwavering
                  Commitment To Improving Community Health.
                </p>
              </div>
              <div className="bg-[#2FAE9B] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold mb-4 text-center">
                  Our Mission
                </h3>
                <p className="leading-relaxed text-center">
                  To Deliver Exceptional Healthcare Services With Compassion And
                  Expertise, Ensuring Every Patient Receives Personalized
                  Attention And The Highest Quality Of Care.
                </p>
              </div>
              <div className="bg-accent text-accent-foreground p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold mb-4 text-center">
                    Our Values
                </h3>
                <ul className="space-y-2 text-center leading-relaxed">
                    <li>* Integrity</li>
                    <li>* Transparency</li>
                    <li>* Quality</li>
                    <li>* Team Work</li>
                    <li>* Execution with Passion</li>
                    <li>* Humane Touch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };


export default function AboutPage() {
    return (
        <>
            <Navbar />
            <AboutUsContent />
        </>
    );
  }
