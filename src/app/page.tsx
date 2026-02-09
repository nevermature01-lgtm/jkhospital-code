"use client";

import Image from "next/image";
import {
  ArrowRight,
  Instagram,
  MessageCircle,
  Menu,
  Mail,
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";

const TopBar = () => (
  <div className="bg-muted text-muted-foreground text-xs font-medium">
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
      <div className="flex items-center gap-4">
        <a href="mailto:info@mindcare.com" className="flex items-center gap-2 hover:text-primary">
          <Mail className="h-4 w-4" />
          <span>info@mindcare.com</span>
        </a>
      </div>
      <div className="flex items-center gap-6">
        <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary">
          <Phone className="h-4 w-4" />
          <span>+1 234 567 890</span>
        </a>
        <a href="tel:+1098765432" className="hidden sm:flex items-center gap-2 hover:text-primary">
          <Phone className="h-4 w-4" />
          <span>+1 098 765 432</span>
        </a>
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <div className="w-full py-4 px-4 sm:px-6 lg:px-8">
    <div className="container max-w-7xl mx-auto">
      <div className="bg-[#1E73BE] rounded-full flex justify-between items-center p-3 px-6 shadow-md">
        <Link
          href="/"
          className="flex items-center"
        >
          <Image src="/logo.png" alt="MindCare Logo" width={140} height={32} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <Link href="#" className="hover:text-gray-200">
            Services
          </Link>
          <Link href="#" className="hover:text-gray-200">
            Specialists
          </Link>
          <Link href="#" className="hover:text-gray-200">
            Prices
          </Link>
          <Link href="#" className="hover:text-gray-200">
            Contacts
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="bg-white/10 p-2 rounded-full hover:bg-white/20">
            <Instagram className="h-5 w-5 text-white" />
          </button>
          <button className="bg-white/10 p-2 rounded-full hover:bg-white/20">
            <MessageCircle className="h-5 w-5 text-white" />
          </button>
          <Button className="hidden sm:flex rounded-full bg-[#2fa693] hover:bg-[#2fa693]/90 shadow-md text-white">
            Book online <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex h-full flex-col gap-6 p-6">
                <Link href="/" className="flex items-center mb-4">
                  <Image src="/logo.png" alt="MindCare Logo" width={140} height={32} />
                </Link>
                <nav className="flex flex-col gap-4 text-lg font-medium">
                  <Link href="#" className="hover:text-[#2fa693] py-2">
                    Services
                  </Link>
                  <Link href="#" className="hover:text-[#2fa693] py-2">
                    Specialists
                  </Link>
                  <Link href="#" className="hover:text-[#2fa693] py-2">
                    Prices
                  </Link>
                  <Link href="#" className="hover:text-[#2fa693] py-2">
                    Contacts
                  </Link>
                </nav>
                <Button className="rounded-full bg-[#2fa693] hover:bg-[#2fa693]/90 shadow-md text-white mt-4">
                  Book online <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="flex items-center justify-center gap-4 mt-auto">
                  <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
                    <Instagram className="h-6 w-6 text-gray-600" />
                  </button>
                  <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
                    <MessageCircle className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </div>
);

const AboutUs = () => {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-clinic');

  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={550}
                height={450}
                className="rounded-[25px] shadow-lg object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#1F3C3C] mb-4">
              About Our Center <span className="text-[#2FAE9B]">MindCare</span>
            </h2>
            <div className="max-w-xl space-y-4 text-[#555] text-base leading-relaxed">
              <p>
                At MindCare, we are dedicated to providing compassionate and comprehensive mental health care. Our experienced team of certified specialists is committed to supporting you on your journey to wellness. We offer a safe, confidential, and nurturing environment where you can explore your challenges and develop effective strategies for a healthier, more fulfilling life.
              </p>
              <p>
                Our approach is rooted in evidence-based practices, tailored to meet the unique needs of each individual. We believe in a holistic model of care that addresses the mind, body, and spirit. Whether you are dealing with anxiety, depression, trauma, or relationship issues, we are here to help you find balance and peace.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <Card className="rounded-[20px] p-8 text-center shadow-md bg-[#2FAE9B] text-white">
                <p className="text-4xl font-bold">600</p>
                <p className="text-sm mt-2">Years of experience of our medical staff</p>
              </Card>
              <Card className="rounded-[20px] p-8 text-center shadow-md bg-white">
                <p className="text-4xl font-bold text-[#1F3C3C]">30</p>
                <p className="text-sm mt-2 text-[#555]">Years our doctors have been caring for the health of the people</p>
              </Card>
              <Card className="rounded-[20px] p-8 text-center shadow-md bg-white">
                <p className="text-4xl font-bold text-[#1F3C3C]">60</p>
                <p className="text-sm mt-2 text-[#555]">Certified specialists in psychology and psychotherapy</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MethodsWeUse = () => {
  const methods = [
    {
      num: "01",
      title: "Cognitive Behavioral Therapy",
      description:
        "This method helps individuals identify and change negative thought patterns and behaviors, replacing them with more positive and realistic ones. It is effective for treating depression, anxiety disorders, and other psychological issues.",
    },
    {
      num: "02",
      title: "Gestalt Therapy",
      description:
        "Focuses on awareness of present emotions and needs, helping individuals understand their true desires and feelings. This therapy promotes personal growth and improves interpersonal relationships.",
    },
    {
      num: "03",
      title: "Psychoanalytic Therapy",
      description:
        "Explores internal conflicts and past traumas through interpretation of behavior, dreams, and free associations. This method helps understand the deep-rooted causes of psychological problems and find ways to resolve them.",
    },
  ];

  return (
    <section className="bg-[#F4F4F4] py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-5/12 w-full">
            <div className="h-[450px] rounded-[25px] bg-gradient-to-br from-[#66C5B4] to-[#9ADBCF] shadow-lg flex flex-col justify-end p-8">
              <h2 className="text-4xl font-bold text-white max-w-[200px]">
                Methods We Use
              </h2>
            </div>
          </div>
          <div className="lg:w-7/12 w-full mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />
              <div className="space-y-12">
                {methods.map((method, index) => (
                  <div key={index} className="relative flex items-start gap-6 sm:gap-8">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                        <span className="text-lg font-bold text-[#2FAE9B]">
                          {method.num}
                        </span>
                      </div>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold text-[#1F3C3C] mb-2">
                        {method.title}
                      </h3>
                      <p className="text-[#666] text-base leading-relaxed">
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
    <div className="bg-background min-h-screen text-foreground font-sans">
      <TopBar />
      <Navbar />
      <main>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
          <div className="relative rounded-[40px] overflow-hidden">
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
                    <div className="relative h-[500px] w-full">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
              <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
            </Carousel>
          </div>
        </div>
        
        <AboutUs />

        <MethodsWeUse />

      </main>
    </div>
  );
}
