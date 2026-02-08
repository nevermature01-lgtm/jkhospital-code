import Image from "next/image";
import {
  ArrowRight,
  Instagram,
  MessageCircle,
  BrainCircuit,
} from "lucide-react";
import Link from "next/link";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { RequestForm } from "@/components/request-form";

const Header = () => (
  <header className="py-4 absolute top-0 left-0 right-0 z-30 bg-transparent">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <Link
        href="/"
        className="flex items-center gap-2 text-2xl font-bold text-primary-foreground"
      >
        <BrainCircuit className="h-8 w-8" />
        <span className="text-foreground">MindCare</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="#" className="text-foreground hover:text-primary">
          Services
        </Link>
        <Link href="#" className="text-foreground hover:text-primary">
          Specialists
        </Link>
        <Link href="#" className="text-foreground hover:text-primary">
          Prices
        </Link>
        <Link href="#" className="text-foreground hover:text-primary">
          Contacts
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Instagram className="h-6 w-6 text-foreground hover:text-primary cursor-pointer" />
        <MessageCircle className="h-6 w-6 text-foreground hover:text-primary cursor-pointer" />
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Book online <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </header>
);

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Header />
      <main>
        <div className="relative">
          <div className="relative bg-primary/10 pt-28 pb-20 sm:pb-24 lg:pb-32 rounded-b-[4rem] overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10">
              {/* Decorative circles */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full opacity-50" />
              <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-primary/10 rounded-full opacity-50" />
              <div className="absolute bottom-10 left-20 w-24 h-24 bg-primary/10 rounded-full opacity-50" />
            </div>
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="max-w-md">
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                      Request a call
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      You can simply order a call and we will help you make an
                      appointment with the right specialist.
                    </p>
                    <RequestForm />
                  </div>
                  <p className="max-w-md text-muted-foreground">
                    Connect with your professional doctors who are ready to help
                    you manage your health with expertise and dedication.
                  </p>
                </div>
                <div className="hidden lg:block relative -mb-32">
                  {heroImage && (
                    <Image
                      alt={heroImage.description}
                      className="object-contain object-bottom h-[650px] mx-auto"
                      src={heroImage.imageUrl}
                      width={500}
                      height={650}
                      data-ai-hint={heroImage.imageHint}
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="container mx-auto px-4 mt-[-4rem] sm:mt-[-6rem] z-20 relative">
          <div className="bg-card p-8 sm:p-12 rounded-[3rem] shadow-xl">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <h1 className="text-3xl md:text-4xl font-bold max-w-lg leading-tight text-center sm:text-left">
                The Best Medical and Treatment Center for You
              </h1>
              <Button size="lg" className="rounded-full shadow-md shrink-0">
                Book online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Placeholder for other sections */}
        <div className="h-48"></div>
      </main>
    </div>
  );
}
