"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your hospital's visiting hours?",
    answer:
      "Our general visiting hours are from 11:00 AM to 1:00 PM and 5:00 PM to 7:00 PM. However, visiting hours may vary for specific wards like the ICU. Please check with the front desk for more details.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our reception at +91-8006005065, or by using our online appointment booking system on our website.",
  },
  {
    question: "What should I bring for an overnight stay?",
    answer:
      "Please bring your personal toiletries, any medications you are currently taking, your insurance information, and a valid ID. We will provide hospital gowns and basic amenities.",
  },
  {
    question: "Do you accept my insurance?",
    answer:
      "We accept a wide range of insurance plans. To confirm if your plan is covered, please contact our billing department prior to your visit.",
  },
  {
    question: "What are the charges for a normal delivery?",
    answer:
      "The charges for a normal delivery can vary. For detailed information on packages and pricing, please contact our billing and admissions department.",
  },
];

export const FAQs = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1F3C3C]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#555] mt-4 max-w-3xl mx-auto">
            Find answers to common questions about our hospital services and procedures. If you can't find your answer here, feel free to contact us.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg mb-4 shadow-md px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
