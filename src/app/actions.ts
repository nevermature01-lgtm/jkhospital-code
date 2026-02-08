"use server";

import { z } from "zod";

const requestCallbackSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
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
    console.log("Request for callback received:");
    console.log("Name:", validatedFields.data.name);
    console.log("Phone:", validatedFields.data.phone);

    return {
      message:
        "Thank you! We've received your request and will call you back shortly.",
      status: "success",
    };
  } catch (error) {
    console.error("Error processing callback request:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      status: "error",
    };
  }
}
