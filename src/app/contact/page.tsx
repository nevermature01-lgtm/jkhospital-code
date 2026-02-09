"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { RequestForm } from "@/components/request-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
    const contactMapImage = PlaceHolderImages.find(img => img.id === 'contact-map');

  const contactDetails = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Us",
      info: "info@jkhospital.com",
      actionText: "Send an Email",
      href: "mailto:info@jkhospital.com",
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Call Us",
      info: "+1 234 567 890",
      actionText: "Call Now",
      href: "tel:+1234567890",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Our Location",
      info: "123 Health St, Wellness City, 45678",
      actionText: "Get Directions",
      href: "#", // Link to Google Maps or similar
    },
  ];

  return (
    <div className="bg-background">
      <section className="relative py-24 bg-primary/5">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Mail className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            We're here to help. Reach out to us for any inquiries or to
            schedule an appointment.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactDetails.map((detail, index) => (
            <Card key={index} className="shadow-lg overflow-hidden text-center">
              <CardHeader className="bg-muted p-6 flex flex-col items-center">
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full mb-4">
                  {detail.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  {detail.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col items-center justify-between flex-grow">
                <p className="text-foreground/80 text-lg mb-4">{detail.info}</p>
                <Button asChild variant="outline" className="mt-auto">
                    <a href={detail.href}>{detail.actionText}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Send us a Message
              </h2>
              <p className="text-foreground/70 mb-6">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <RequestForm />
            </div>
            <div className="h-full">
              {contactMapImage && (
                <Image
                  src={contactMapImage.imageUrl}
                  alt={contactMapImage.description}
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                  data-ai-hint={contactMapImage.imageHint}
                />
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
