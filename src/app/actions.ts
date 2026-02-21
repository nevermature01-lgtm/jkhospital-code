"use server";

import { z } from "zod";

const requestCallbackSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const bloodDonorSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  bloodGroup: z.string().min(1, { message: "Please select a blood group." }),
  donationDate: z.date({
      required_error: "A donation date is required.",
      invalid_type_error: "That's not a valid date!",
  }),
});


export type FormState = {
  message: string;
  status: "success" | "error" | "idle";
};

export async function requestCallback(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const validatedFields = requestCallbackSchema.safeParse({
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      return {
        message:
          validatedFields.error.errors.map((e) => e.message).join(", ") ||
          "Validation failed.",
        status: "error",
      };
    }

    // In a real application, you would handle the form data here, e.g.,
    // send an email, save to a database, or call a CRM API.
    console.log("Feedback received:");
    console.log("Name:", validatedFields.data.name);
    console.log("Phone:", validatedFields.data.phone);
    console.log("Email:", validatedFields.data.email);
    console.log("Message:", validatedFields.data.message);

    return {
      message:
        "Thank you! We've received your feedback and will get back to you if needed.",
      status: "success",
    };
  } catch (error) {
    console.error("Error processing feedback:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      status: "error",
    };
  }
}

export async function registerBloodDonor(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      bloodGroup: formData.get("bloodGroup"),
      donationDate: new Date(formData.get("donationDate") as string),
    };
    
    const validatedFields = bloodDonorSchema.safeParse(rawFormData);

    if (!validatedFields.success) {
      return {
        message:
          validatedFields.error.errors.map((e) => e.message).join(", ") ||
          "Validation failed.",
        status: "error",
      };
    }

    console.log("Blood donor registration received:");
    console.log("Name:", validatedFields.data.name);
    console.log("Email:", validatedFields.data.email);
    console.log("Phone:", validatedFields.data.phone);
    console.log("Blood Group:", validatedFields.data.bloodGroup);
    console.log("Preferred Date:", validatedFields.data.donationDate);

    return {
      message:
        "Thank you for registering as a blood donor! We will contact you shortly.",
      status: "success",
    };
  } catch (error) {
    console.error("Error processing blood donor registration:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      status: "error",
    };
  }
}
