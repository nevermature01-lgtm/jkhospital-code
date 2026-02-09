"use client";

import { BookOpenCheck, Building, BedDouble, ClipboardCheck, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";

const NursingCollegePage = () => {

  const content = [
    {
      icon: <BookOpenCheck className="h-8 w-8 text-primary" />,
      title: "Courses Offered",
      items: [
        "B.Sc. Nursing – 4 Years",
        "G.N.M. – 3 Years",
        "A.N.M. – 2 Years",
      ],
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Infrastructure",
      items: [
        "Smart classrooms with modern teaching aids",
        "Fully-equipped nursing labs",
        "Library & computer lab with journals",
      ],
    },
    {
      icon: <BedDouble className="h-8 w-8 text-primary" />,
      title: "Hostel Facilities",
      items: [
        "Separate hostels for men and women",
        "Hygienic kitchen and food",
        "Parental contact facility",
      ],
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
      title: "Admission Criteria",
      items: [
        "B.Sc.: 10+2 Science, 45% marks",
        "G.N.M.: 10+2, 40% marks with English",
        "A.N.M.: 10+2 in Arts/Science with English",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-background">
        <section className="relative py-24 bg-primary/5">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                      <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
              </div>
              <h1 className="text-5xl font-extrabold text-primary mb-4 tracking-tight">JK College of Nursing</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                  Fostering the next generation of compassionate and skilled nursing professionals.
              </p>
          </div>
        </section>

        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
              {content.map((section, index) => (
              <Card key={index} className="shadow-lg overflow-hidden">
                <CardHeader className="bg-muted p-6">
                  <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                          {section.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold text-primary">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 list-disc list-inside text-foreground/80">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NursingCollegePage;
