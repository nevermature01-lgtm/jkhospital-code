"use client";

import { Droplet, ShieldCheck, Siren, ClipboardCheck, CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BloodDonorForm } from "@/components/blood-donor-form";

const BloodBankPage = () => {
    const heroImage = PlaceHolderImages.find(img => img.id === 'blood-bank-hero');
    const donorImage = PlaceHolderImages.find(img => img.id === 'blood-donor-registration');

  const services = [
    {
      icon: <Droplet className="h-8 w-8 text-primary" />,
      title: "Blood Donation",
      description: "Safe and comfortable donation process with expert staff.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Blood Storage",
      description: "State-of-the-art facilities for safe blood storage.",
    },
    {
      icon: <Siren className="h-8 w-8 text-primary" />,
      title: "Emergency Supply",
      description: "24/7 emergency blood supply for critical cases.",
    },
  ];

  const howToDonateSteps = [
    {
        icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
        title: "Check Eligibility",
        description: "Must be 18–65 years old, weight > 50kg, and in good health.",
    },
    {
        icon: <CalendarDays className="h-8 w-8 text-primary" />,
        title: "Schedule Appointment",
        description: "Book your preferred date and time for donation.",
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: "Donation Process",
        description: "The actual donation takes about 10–15 minutes.",
    }
  ]

  return (
    <div className="bg-background">
        <section className="relative py-24 bg-primary/5">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"/><path d="M12 12h.01"/></svg>
                    </div>
                </div>
                <h1 className="text-5xl font-extrabold text-primary mb-4 tracking-tight">Our Blood Bank</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                    A safe, reliable, and life-saving resource for our community.
                </p>
            </div>
      </section>

      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-6xl">
        {heroImage && (
            <div className="mb-16">
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={1200}
                    height={500}
                    className="rounded-2xl shadow-lg object-cover w-full aspect-[16/7]"
                    data-ai-hint={heroImage.imageHint}
                />
            </div>
        )}

        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">Our Blood Bank Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg overflow-hidden text-center">
              <CardHeader className="bg-muted p-6 flex flex-col items-center">
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full mb-4">
                    {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">How to Donate</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {howToDonateSteps.map((step, index) => (
            <Card key={index} className="shadow-lg overflow-hidden text-center">
              <CardHeader className="bg-muted p-6 flex flex-col items-center">
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full mb-4">
                    {step.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-primary">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-foreground/80">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 order-2 md:order-1">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Become a Blood Donor</h2>
                    <BloodDonorForm />
                </div>
                <div className="order-1 md:order-2 h-full">
                    {donorImage && (
                         <Image
                            src={donorImage.imageUrl}
                            alt={donorImage.description}
                            width={600}
                            height={700}
                            className="object-cover w-full h-full"
                            data-ai-hint={donorImage.imageHint}
                        />
                    )}
                </div>
            </div>
        </Card>

      </div>
    </div>
  );
};

export default BloodBankPage;
