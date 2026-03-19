"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { RequestForm } from "@/components/request-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";

const ContactPage = () => {
    
  const contactDetails = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Us",
      info: "Care@jkhospital.in",
      actionText: "Send an Email",
      href: "mailto:Care@jkhospital.in",
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Call Us",
      info: "+91-8006005061",
      actionText: "Call Now",
      href: "tel:+918006005061",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Our Location",
      info: "NH92, Vivek Vihar Colony, Datawali, Uttar Pradesh 206002",
      actionText: "Get Directions",
      href: "#", // Link to Google Maps or similar
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-primary/5 min-h-screen">
        <section className="relative py-24 bg-primary/10">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/20 rounded-full">
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
              <Card key={index} className="shadow-lg overflow-hidden text-center bg-white border-none">
                <CardHeader className="bg-primary/5 p-6 flex flex-col items-center">
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

          <Card className="shadow-lg overflow-hidden bg-white border-none">
            <div className="items-center">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Leave Your Feedback
                </h2>
                <p className="text-foreground/70 mb-6">
                  We value your opinion. Fill out the form and our team will get back to you.
                </p>
                <RequestForm />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
