"use client";

import {
  Stethoscope,
  Baby,
  Droplet,
  Smile,
  PersonStanding,
  Microscope,
  Scan,
  Siren,
  Pill,
  Ear,
} from "lucide-react";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Navbar } from "@/components/layout/Navbar";

const departmentsData = [
  {
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    title: "General & Laparoscopic Surgery",
    image: "dept-surgery",
    description: "The Department of General & Laparoscopic Surgery at JK Hospital, Etawah offers comprehensive surgical care with an emphasis on minimally invasive (laparoscopic) techniques, patient safety, and rapid recovery. The department manages both elective and emergency surgical cases, supported by modern operation theatres, ICU facilities, advanced diagnostics, and 24×7 emergency services.",
    services: [
      "Laparoscopic cholecystectomy and appendectomy",
      "Hernia surgeries (open and laparoscopic – inguinal, umbilical, incisional)",
      "Appendicectomy (open and laparoscopic)",
      "Anorectal surgeries (piles, fissure, fistula)",
      "Soft tissue procedures (lipoma, sebaceous cysts, abscess drainage)",
      "Minor and major abdominal surgeries",
      "Trauma and emergency surgical care",
      "Advanced wound management",
    ],
    specialists: [
      {
        id: "doctor-1",
        name: "Dr. Manoj Yadav",
        qualifications: "MBBS, MS, FICS, FAIS, FIAGES, FILHS",
        department: "General & Laparoscopic Surgery and Urology",
      },
      {
        id: "doctor-2",
        name: "Dr. Kumar Katreya Yadav",
        qualifications: "MBBS, MS",
        department: "General & Laparoscopic Surgery and Urology",
      },
    ],
  },
  {
    icon: <Baby className="h-8 w-8 text-primary" />,
    title: "Department of Gynaecology",
    image: "dept-gynaecology",
    description: "The Department of Gynaecology at JK Hospital is dedicated to providing comprehensive and personalized healthcare services for women of all age groups. Our experienced specialists focus on preventive care, accurate diagnosis, and advanced treatment using modern medical technology and patient-centered approaches. We ensure safe, confidential, and compassionate care in a comfortable environment.",
    services: [
      "Routine Women’s Health Check-ups",
      "Pregnancy Care (ANC / PNC Care)",
      "Normal & Cesarean Deliveries",
      "High-Risk Pregnancy Management",
      "Infertility Evaluation & Treatment",
      "Menstrual Problems Treatment",
      "PCOS / PCOD Management",
      "Fibroid & Ovarian Cyst Treatment",
      "Menopause Clinic & Counseling",
      "Family Planning & Contraception Services",
      "Pap Smear & Cervical Cancer Screening",
      "Breast Examination & Consultation",
      "Ultrasound & Fetal Monitoring",
      "Laparoscopic (Keyhole) Surgeries",
      "Hysterectomy & Other Gynae Surgeries",
      "Vaginal Infection & UTI Treatment",
      "Adolescent Gynaecology Care",
    ],
    specialists: [
      {
        id: "doctor-3",
        name: "Dr. Neha Singh",
        qualifications: "MBBS, MS (Obstetrics & Gynaecology)",
        department: "Gynaecology Department",
      },
    ],
  },
  {
    icon: <Droplet className="h-8 w-8 text-primary" />,
    title: "Urology & Kidney Care",
    image: "dept-urology",
    description: "Our Urology & Kidney Care department offers comprehensive diagnostic, medical, and surgical care for a wide range of urological disorders. From kidney stones to prostate diseases and urinary tract infections, our experienced team uses advanced technology for minimally invasive treatments. Our focus is on patient comfort, faster recovery, and excellence in surgical outcomes. The department is equipped with modern endoscopic and laparoscopic equipment to provide state-of-the-art care.",
    services: [
      "Laser Treatment for Kidney Stones",
      "Laparoscopic Urology Surgeries",
      "Percutaneous Nephrolithotomy (PCNL)",
      "Urological Cancer Management",
      "Prostate Surgery (TURP, Laser)",
      "Ureteroscopy (URS)",
      "Urethral Stricture Management",
      "Urinary Incontinence Management",
    ],
    specialists: [
      {
        id: "doctor-4",
        name: "Dr. Madhukar Gupta",
        qualifications: "MCH Urology",
        department: "",
      },
    ],
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: "Dentistry & Oral Care",
    image: "dept-dentistry",
    description: "Our Dentistry & Oral Care department offers comprehensive dental services ranging from preventive care to advanced cosmetic and surgical treatments. We focus on personalized dental solutions using modern equipment and pain-free techniques to ensure a comfortable experience. Whether it’s routine cleaning, dental implants, or complex maxillofacial procedures, our team is committed to helping you achieve a healthy and beautiful smile.",
    services: [
      "Routine Dental Check-ups & Cleaning",
      "Dental Implants",
      "Orthodontic Treatment (Braces & Aligners)",
      "Gum Disease Management",
      "Root Canal Treatment",
      "Cosmetic Dentistry (Smile Makeover, Veneers)",
      "Oral & Maxillofacial Surgery",
      "Pediatric Dentistry",
    ],
    specialists: [
      {
        id: "doctor-5",
        name: "Dr. Shahini Yadav",
        qualifications: "BDS, FMC",
        department: "Dentistry and Oral Care",
      },
    ],
  },
  {
    icon: <PersonStanding className="h-8 w-8 text-primary" />,
    title: "Orthopedics & Joint Care",
    image: "dept-orthopedics",
    description: "Our Orthopedics & Joint Care department is dedicated to providing advanced musculoskeletal care, from injury management to complex joint replacements. We specialize in treating fractures, arthritis, sports injuries, and spinal disorders using state-of-the-art technology and minimally invasive techniques. Our focus is on restoring mobility, relieving pain, and helping patients regain an active lifestyle.",
    services: [
      "Fracture Treatment & Trauma Surgery",
      "Total Hip Replacement (THR)",
      "Spine Surgery",
      "Pediatric Orthopedics",
      "Total Knee Replacement (TKR)",
      "Arthroscopy & Sports Injury Management",
      "Joint Preservation Surgery",
      "Orthopedic Rehabilitation",
    ],
    specialists: [
      {
        id: "doctor-6",
        name: "Dr. Pankaj",
        qualifications: "M.B.B.S, D. ORTH, DNB",
        department: "",
      },
    ],
  },
  {
    icon: <Microscope className="h-8 w-8 text-primary" />,
    title: "Pathology",
    image: "dept-pathology",
    description: "JK Hospital conducts routine tests like blood, urine, stool, and sputum. Our Pathology Lab works round the clock staff on the job. Our laboratories are equipped with state-of-the-art equipment and we take great pride in providing quick turnaround results on the tests conducted. We continuously strive to provide the most accurate results and the tests are all conducted in clean, hygienically sterilized conditions.",
    services: [
      "Blood Tests",
      "Urine Examination",
      "Stool Examination",
      "Sputum Analysis",
      "Biochemistry Tests",
      "Hematology Tests",
      "Histopathology",
      "Cytology Tests",
    ],
    specialists: [],
  },
  {
    icon: <Scan className="h-8 w-8 text-primary" />,
    title: "Radiology & Imaging",
    image: "dept-radiology",
    description: "Our Radiology & Imaging department is equipped with cutting-edge diagnostic tools to provide accurate imaging for a wide range of medical conditions. We offer advanced techniques such as CT scans, MRIs, X-rays, and ultrasound to assist in the detection, diagnosis, and treatment planning of various diseases and injuries. Our team of radiologists ensures precise imaging to support effective medical care.",
    services: [
      "X-ray Imaging",
      "MRI (Magnetic Resonance Imaging)",
      "Mammography",
      "Interventional Radiology",
      "CT Scan (Computed Tomography)",
      "Ultrasound Imaging",
      "Fluoroscopy",
      "Pediatric Radiology",
    ],
    specialists: [],
  },
  {
    icon: <Siren className="h-8 w-8 text-primary" />,
    title: "Emergency and Critical Care",
    image: "dept-emergency",
    description: "All our centres are open 24×7 for urgent and emergency care. No appointments are required, the patient may walk in.",
    services: [
      "Life threatening conditions",
      "Fractures and compound fractures",
      "Loss of consciousness",
      "Sudden and unexpected paralysis (symptoms of stroke)",
      "Severe headaches",
      "Severe chest pain or difficulty breathing",
      "Convulsions and seizures",
      "Head, neck or back injuries",
      "Uncontrolled or excessive bleeding",
    ],
    specialists: [],
  },
  {
    icon: <Pill className="h-8 w-8 text-primary" />,
    title: "General Medicine",
    image: "dept-general-medicine",
    description: "General Medicine focuses on the prevention, diagnosis, and non-surgical treatment of a wide range of health conditions. At Navin Hospital, our experienced physicians provide comprehensive care for acute and chronic illnesses, ensuring accurate diagnosis and personalized treatment plans. We emphasize preventive healthcare, lifestyle guidance, and continuous monitoring to help patients maintain long-term wellness and overall health.",
    services: [
      "Diabetes management",
      "Hypertension treatment",
      "Fever & infection care",
      "Thyroid disorders treatment",
      "Respiratory disease management",
      "Cardiac risk assessment",
      "Routine health check-ups",
      "Preventive healthcare",
      "Gastrointestinal disorder treatment",
      "Allergy management",
      "Chronic disease monitoring",
    ],
    specialists: [
      {
        id: "doctor-7",
        name: "Dr. ADEEM KHAN",
        qualifications: "MBBS, MD (Medicine), ACMDC, CCMH",
        department: "General Physician",
      },
    ],
  },
  {
    icon: <Ear className="h-8 w-8 text-primary" />,
    title: "ENT (Ear, Nose & Throat)",
    image: "dept-ent",
    description: "ENT, which stands for Ear, Nose, and Throat, is a specialized branch of medicine that focuses on diagnosing and treating disorders related to the ear, nasal passages, sinuses, throat, and related structures of the head and neck. At Navin Hospital, our ENT specialists provide advanced medical and surgical care for both adults and children, ensuring accurate diagnosis and personalized treatment plans for optimal recovery.",
    services: [
      "Sinusitis treatment",
      "Tonsillitis management",
      "Hearing loss evaluation",
      "Ear infection treatment",
      "Nasal allergy treatment",
      "Voice & speech disorders",
      "Vertigo treatment",
      "Endoscopic sinus surgery",
      "Deviated septum correction",
      "Throat infection care",
      "Head & neck disorder management",
    ],
    specialists: [
      {
        id: "doctor-8",
        name: "Dr. ASHWINI KUMAR YADAV",
        qualifications: "M.B.B.S, MS ENT",
        department: "",
      },
    ],
  },
];


const DepartmentCard = ({ department }: { department: (typeof departmentsData)[0] }) => {
    const deptImage = PlaceHolderImages.find(img => img.id === department.image);

    return (
    <Card className="mb-12 overflow-hidden shadow-lg">
      <CardHeader className="bg-muted p-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
            {department.icon}
          </div>
          <CardTitle className="text-3xl font-bold text-primary">{department.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {deptImage && (
            <Image
                src={deptImage.imageUrl}
                alt={deptImage.description}
                width={800}
                height={400}
                className="rounded-lg shadow-md object-cover w-full aspect-video mb-8"
                data-ai-hint={deptImage.imageHint}
            />
        )}
        <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-12">
                <p className="text-foreground/80 leading-relaxed mb-8">{department.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-xl text-foreground mb-4 border-b-2 border-primary pb-2">Our Services</h4>
                        <ul className="space-y-2 list-disc list-inside text-foreground/70">
                        {department.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        {department.specialists.length > 0 && (
                            <div>
                            <h4 className="font-bold text-xl text-foreground mb-4 border-b-2 border-primary pb-2">Our Specialists</h4>
                            <div className="space-y-4">
                                {department.specialists.map((specialist, index) => {
                                  const doctorImage = PlaceHolderImages.find(img => img.id === specialist.id);
                                  return (
                                    <div key={index} className="p-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-4">
                                      {doctorImage ? (
                                        <Image
                                            src={doctorImage.imageUrl}
                                            alt={`Portrait of ${specialist.name}`}
                                            width={60}
                                            height={60}
                                            className="rounded-full object-cover w-16 h-16"
                                            data-ai-hint={doctorImage.imageHint}
                                        />
                                      ) : (
                                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                                            <PersonStanding className="w-8 h-8 text-primary" />
                                        </div>
                                      )}
                                      <div>
                                        <p className="font-bold text-foreground">{specialist.name}</p>
                                        {specialist.qualifications && <p className="text-sm text-foreground/70">{specialist.qualifications}</p>}
                                        {specialist.department && <p className="text-sm text-primary font-medium">{specialist.department}</p>}
                                      </div>
                                    </div>
                                  )
                                })}
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
    );
};

export default function DepartmentsPage() {
  return (
    <>
      <Navbar />
      <div className="bg-background">
        <section className="py-16 bg-primary/5">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-extrabold text-primary mb-4 tracking-tight">Our Departments</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                  Explore our wide range of specialized departments, each dedicated to providing exceptional patient care with expertise and compassion.
              </p>
          </div>
        </section>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-6xl">
          {departmentsData.map((dept) => (
            <DepartmentCard key={dept.title} department={dept} />
          ))}
        </div>
      </div>
    </>
  );
}
