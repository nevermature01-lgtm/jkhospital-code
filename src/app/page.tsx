import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { RequestForm } from "@/components/request-form";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Quality Medical Care, Always Here for You
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  At MindCare, we connect you with dedicated specialists who
                  provide expert medical advice and compassionate care. Your
                  health is our priority.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="shadow-md">
                  Book Telehealth Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="pt-6">
                <RequestForm />
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              {heroImage && (
                <Image
                  alt={heroImage.description}
                  className="mx-auto aspect-[4/5] overflow-hidden rounded-xl object-cover"
                  src={heroImage.imageUrl}
                  width={500}
                  height={625}
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
