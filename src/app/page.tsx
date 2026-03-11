"use client";

import Image from "next/image";
import {
  ArrowRight,
  Stethoscope,
  Baby,
  Droplet,
  Smile,
  PersonStanding,
  Scan,
  Siren,
  Pill,
  Ear,
  Microscope,
  Quote,
  Star,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { FAQs } from "@/components/faqs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AboutUsSummary = () => {
    return (
    <section className="bg-white py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          <p className="text-[#2FAE9B] font-semibold uppercase tracking-wider">
            About JK Hospital
          </p>
          <h2 className="text-4xl font-bold text-[#1F3C3C]">
            Your Trusted Healthcare Partner
          </h2>
          <p className="text-[#555] text-base leading-relaxed max-w-3xl mx-auto">
            J.K. Hospital, run by the Jabar Singh Kaushalya Devi Charitable Trust, is a 150-bedded multispecialty hospital with advanced clinical facilities. We are committed to providing excellent healthcare and fostering the next generation of nursing professionals through our affiliated J.K. College of Nursing.
          </p>
          <Button asChild className="rounded-full bg-[#2FAE9B] hover:bg-[#2FAE9B]/90 shadow-md text-white px-8 py-6 text-base">
              <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
          </Button>
        </div>
      </div>
    </section>
  )};

const WhatWeOffer = () => {
    const services = [
      {
        icon: <Siren className="h-6 w-6 text-[#2FAE9B]" />,
        title: "Emergency Care",
        description: "24/7 Emergency Services With Rapid Response Teams Ready To Provide Immediate Medical Attention.",
      },
      {
        icon: <Microscope className="h-6 w-6 text-[#2FAE9B]" />,
        title: "Laboratory Services",
        description: "State-Of- some State-Of-The-Art Diagnostic Laboratory Offering Comprehensive Testing With Quick And Accurate Results.",
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
                {/* Mobile View */}
                <div className="lg:hidden">
                    <div className="text-center mb-12">
                        <div className="inline-block rounded-lg bg-gradient-to-br from-[#66C5B4] to-[#9ADBCF] p-8 shadow-md">
                            <h2 className="text-4xl font-bold text-white text-center">
                                What We Offer
                            </h2>
                        </div>
                    </div>
                    <div className="space-y-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1F3C3C] mb-2">{service.title}</h3>
                                    <p className="text-[#555] leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:flex flex-row items-start gap-16">
                    <div className="lg:w-2/5 lg:sticky lg:top-20">
                        <div className="rounded-lg bg-gradient-to-br from-[#66C5B4] to-[#9ADBCF] p-8 shadow-md text-left">
                            <h2 className="text-4xl font-bold text-white">
                                What We Offer
                            </h2>
                        </div>
                    </div>
                    <div className="lg:w-3/5">
                        <div className="relative space-y-8 pt-4">
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                            {services.map((service, index) => (
                                <div key={index} className="flex items-start gap-6 relative">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-10">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1F3C3C] mb-2">{service.title}</h3>
                                        <p className="text-[#555] leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const OurSpecialists = () => {
    const specialists = [
      {
        id: "doctor-1",
        name: "Dr. Manoj Yadav",
        title: "General & Laparoscopic Surgery and Urology",
        description: "MBBS, MS, FICS, FAIS, FIAGES, FILHS. A leading surgeon with extensive experience.",
      },
      {
        id: "doctor-3",
        name: "Dr. Neha Singh",
        title: "Gynaecology Department",
        description: "MBBS, MS (Obstetrics & Gynaecology). Dedicated to women's health and wellness.",
      },
      {
        id: "doctor-5",
        name: "Dr. Shahini Yadav",
        title: "Dentistry and Oral Care",
        description: "BDS, FMC. Committed to providing excellent dental care.",
      },
    ];
  
    const specialistImages = PlaceHolderImages.filter(img => img.id.startsWith('doctor-'));
  
    return (
      <section className="bg-background py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2FAE9B] font-semibold uppercase tracking-wider mb-2">Meet Our</p>
          <h2 className="text-4xl font-bold text-[#1F3C3C] mb-12">Expert Specialists</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist) => {
              const image = specialistImages.find(img => img.id === specialist.id);
              if (specialist.id === 'doctor-1') {
                return (
                  <Card key={specialist.id} className="rounded-[25px] shadow-md p-6 flex flex-col justify-end text-left h-96 bg-primary/10">
                      <div>
                          <h3 className="text-xl font-bold text-foreground">{specialist.name}</h3>
                          <p className="text-base font-medium text-foreground/80 mb-2">{specialist.title}</p>
                          <p className="text-sm text-foreground/70">{specialist.description}</p>
                      </div>
                  </Card>
                );
              }
              return (
                <Card key={specialist.id} className="rounded-[25px] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group h-96">
                  {image && (
                       <Image
                          src={image.imageUrl}
                          alt={`Portrait of ${specialist.name}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          style={{ objectPosition: image.objectPosition || 'center' }}
                          data-ai-hint={image.imageHint}
                        />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end h-full">
                      <div>
                          <h3 className="text-xl font-bold">{specialist.name}</h3>
                          <p className="text-base font-medium text-primary-foreground/80 mb-2">{specialist.title}</p>
                          <p className="text-sm text-primary-foreground/70">{specialist.description}</p>
                      </div>
                  </div>
                </Card>
              );
            })}
          </div>
  
          <div className="mt-12">
              <Button asChild className="rounded-full bg-[#2FAE9B] hover:bg-[#2FAE9B]/90 shadow-md text-white px-8 py-6 text-base">
                  <Link href="/doctors">
                      See All Doctors <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
          </div>
        </div>
      </section>
    );
  };

const OurDepartments = () => {
  const services = [
    {
      icon: <Stethoscope className="h-6 w-6 text-[#2FAE9B]" />,
      title: "General & Laparoscopic Surgery",
      description: "Advanced Minimally Invasive Surgeries With Faster Recovery.",
    },
    {
      icon: <Baby className="h-6 w-6 text-[#2FAE9B]" />,
      title: "Department of Gynaecology",
      description: "Specialized Care For Women’s Reproductive Health And Wellness.",
    },
    {
      icon: <Droplet className="h-6 w-6 text-[#2FAE9B]" />,
      title: "Urology & Kidney Care",
      description: "Expert Care For Urinary Tract And Kidney Health.",
    },
    {
      icon: <Smile className="h-6 w-6 text-[#2FAE9B]" />,
      title: "Dentistry & Oral Care",
      description: "Comprehensive Dental Care Services, From Preventive Treatments To Advanced Procedures.",
    },
    {
      icon: <PersonStanding className="h-6 w-6 text-[#2FAE9B]" />,
      title: "Orthopedics & Joint Care",
      description: "Comprehensive Care For Bones, Joints, And Mobility.",
    },
    {
      icon: <Microscope className="h-6 w-6 text-[#2FAE9B]" />,
      title: "Pathology",
      description: "Accurate Lab Testing For Diagnosis And Health Monitoring.",
    },
     {
      icon: <Scan className="h-6 w-6 text-[#2FAE9B]" />,
      title: "Radiology & Imaging",
      description: "Advanced Imaging Services For Precise Diagnosis.",
    },
    {
      icon: <Siren className="h-6 w-6 text-[#2FAE9B]" />,
      title: "Emergency and Critical Care",
      description: "Immediate, Life-Saving Care For Critical Conditions.",
    },
    {
      icon: <Pill className="h-6 w-6 text-[#2FAE9B]" />,
      title: "General Medicine",
      description: "Comprehensive Care For Overall Adult Health.",
    },
    {
      icon: <Ear className="h-6 w-6 text-[#2FAE9B]" />,
      title: "ENT (Ear, Nose & Throat)",
      description: "Specialized Care For Ear, Nose, And Throat Disorders.",
    },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-gradient-to-br from-[#66C5B4] to-[#9ADBCF] p-8 shadow-md">
              <h2 className="text-4xl font-bold text-white text-center">
                Our Departments
              </h2>
            </div>
          </div>
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F3C3C] mb-2">{service.title}</h3>
                  <p className="text-[#555] leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-row-reverse items-start gap-16">
          <div className="lg:w-2/5 lg:sticky lg:top-20">
            <div className="rounded-lg bg-gradient-to-br from-[#66C5B4] to-[#9ADBCF] p-8 shadow-md text-left">
              <h2 className="text-4xl font-bold text-white">
                Our Departments
              </h2>
            </div>
          </div>
          <div className="lg:w-3/5">
            <div className="relative space-y-8 pt-4">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-6 relative">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-10">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F3C3C] mb-2">{service.title}</h3>
                    <p className="text-[#555] leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: "testimonial-1",
      name: "Gudiya Kashyap",
      city: "Etawah",
      quote:
        "The doctor was very polite and explained the condition clearly. The treatment was effective and the staff was supportive",
    },
    {
      id: "testimonial-2",
      name: "Anuj Shakya",
      city: "Etawah",
      quote:
        "A very positive experience. The doctor’s guidance and the hospital’s services were excellent.",
    },
    {
      id: "testimonial-3",
      name: "Chitransh Gupta",
      city: "Etawah",
      quote:
        "I had a great experience at this hospital. The doctors are knowledgeable, and the nursing staff is very attentive. The hospital maintains good hygiene and the overall process was smooth.",
    },
    {
      id: "testimonial-4",
      name: "Ritu Yadav",
      city: "Etawah",
      quote:
        "The service of hospital is very good .they provide treatment in very affordable prices and the hospital staff is also very humble if you want any treatment pls go here .",
    },
    {
      id: "testimonial-5",
      name: "Aman Singh",
      city: "Etawah",
      quote:
        "Quick response and proper treatment. The doctor showed genuine concern for my health.",
    },
    {
      id: "testimonial-6",
      name: "Ghanshyam Savita",
      city: "Etawah",
      quote:
        "Good experience at the hospital. The doctor maintained a friendly approach and cleared all my doubts.",
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#2FAE9B] font-semibold uppercase tracking-wider mb-2">
          Testimonials
        </p>
        <h2 className="text-4xl font-bold text-[#1F3C3C] mb-12">
          What Our Patients Say
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-mx-4">
            {testimonials.map((testimonial) => {
              return (
                <CarouselItem key={testimonial.id} className="px-4 sm:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="rounded-[25px] p-8 text-left shadow-lg bg-white flex flex-col h-full">
                      <Quote className="h-8 w-8 text-[#9ADBCF] mb-4" />
                      <p className="text-[#555] leading-relaxed mb-6 flex-grow">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center mt-auto">
                        <Avatar>
                            <AvatarFallback>
                                {testimonial.name.split(" ").map((chunk) => chunk[0]).join("")}
                            </AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <p className="font-bold text-[#1F3C3C]">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.city}</p>
                        </div>
                        <div className="ml-auto flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const sliderImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-image-'));

  return (
    <>
      <div className="relative bg-primary">
        <Navbar />
        <div className="sm:container sm:max-w-7xl sm:mx-auto sm:px-6 lg:px-8 sm:py-8">
          <div className="relative sm:rounded-[40px] overflow-hidden">
            <Carousel
              className="w-full"
              plugins={[plugin.current]}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {sliderImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="relative h-[600px] sm:h-[500px] w-full">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-6 sm:p-8 md:p-16 space-y-2 sm:space-y-4">
                        <div className="bg-[#2FAE9B] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                          Your Health is Our Priority
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
                          Promise of <br />
                          Care and Trust
                        </h2>
                        <p className="text-base sm:text-lg max-w-lg">
                          Providing exceptional healthcare with compassion and expertise. Our team of specialists are dedicated to your wellbeing.
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
              <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </div>
      
      <AboutUsSummary />
      <WhatWeOffer />
      <OurSpecialists />
      <OurDepartments />
      <Testimonials />
      <FAQs />
    </>
  );
}