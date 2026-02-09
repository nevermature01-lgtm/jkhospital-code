import Image from "next/image";
import {
  ArrowRight,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

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
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#5cc8b4] to-[#4bb6a3] rounded-[40px] overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-2xl -z-0"></div>
          <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-white/10 rounded-full blur-2xl -z-0"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 md:p-12 lg:p-20 lg:py-8 gap-12">
            {/* Left Column */}
            <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative mt-8 lg:mt-0">
               {heroImage && (
                <div className="relative h-[450px] w-[350px] sm:h-[550px] sm:w-[450px] lg:-mb-24">
                  <Image
                    alt={heroImage.description}
                    className="object-contain object-bottom"
                    src={heroImage.imageUrl}
                    fill
                    data-ai-hint={heroImage.imageHint}
                    priority
                  />
                </div>
              )}
            </div>
          </div>
          <Button className="absolute bottom-8 right-8 rounded-full bg-[#2fa693] hover:bg-[#2fa693]/90 shadow-md text-white hidden md:flex">
            Book online <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {/* Placeholder for other sections */}
        <div className="h-48"></div>
      </main>
    </div>
  );
}
