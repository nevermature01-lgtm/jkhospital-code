"use client";

import Image from "next/image";
import {
  ArrowRight,
  Instagram,
  MessageCircle,
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

const Navbar = () => (
  <div className="w-full py-4">
    <div className="container max-w-7xl mx-auto">
      <div className="bg-white rounded-full flex justify-between items-center p-3 px-6 shadow-md">
        <Link
          href="/"
          className="flex items-center"
        >
          <Image src="/logo.png" alt="MindCare Logo" width={140} height={32} />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#" className="hover:text-[#2fa693]">
            Services
          </Link>
          <Link href="#" className="hover:text-[#2fa693]">
            Specialists
          </Link>
          <Link href="#" className="hover:text-[#2fa693]">
            Prices
          </Link>
          <Link href="#" className="hover:text-[#2fa693]">
            Contacts
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <Instagram className="h-5 w-5 text-gray-600" />
          </button>
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <MessageCircle className="h-5 w-5 text-gray-600" />
          </button>
          <Button className="hidden sm:flex rounded-full bg-[#2fa693] hover:bg-[#2fa693]/90 shadow-md text-white">
            Book online <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const sliderImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-image-'));

  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        
        {/* Placeholder for other sections */}
        <div className="h-48"></div>
      </main>
    </div>
  );
}
