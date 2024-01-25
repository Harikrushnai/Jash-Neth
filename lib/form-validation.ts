import { z } from "zod"

export const ContactFormSchema = z.object({
    name: z.string().min(2, { message: "A name is required" }).max(500),
    email: z.string().email({ message: "An email is required" }),
    phone_number: z.string().min(9, { message: "A phone number is required" }),
    message: z.string().min(2, { message: "The message field cannot be empty" }),
    website_design: z.boolean(),
    application_design: z.boolean(),
    graphic_design: z.boolean(),
    media_photography: z.boolean(),
    video_production: z.boolean(),
    other: z.boolean(),
})

export const CareersFormSchema = z.object({
    first_name: z.string().min(2, { message: "A name is required" }).max(500),
    last_name: z.string().min(2, { message: "A name is required" }).max(500),
    email: z.string().email({ message: "An email is required" }),
    phone_number: z.string().min(9, { message: "A phone number is required" }),
    message: z.string().min(2, { message: "The message field cannot be empty" })
})