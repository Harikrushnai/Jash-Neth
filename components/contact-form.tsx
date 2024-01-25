import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "../lib/form-validation";
import { sendEmail } from "../lib/send-email";

export type FormData = {
  name: string;
  email: string;
  phone_number: string;
  message: string;
  website_design: boolean;
  application_design: boolean;
  graphic_design: boolean;
  media_photography: boolean;
  video_production: boolean;
  other: boolean;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
      website_design: false,
      application_design: false,
      graphic_design: false,
      media_photography: false,
      video_production: false,
      other: false,
    },
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => sendEmail(data);

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label className="block font-medium text-[14px]" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="block border rounded px-4 py-3 mt-1 w-full"
          placeholder="Your name"
          disabled={isSubmitting}
        />
        {errors.name?.message && (
          <p className="font-normal text-red-500">{errors.name?.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block font-medium text-[14px]" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register("email")}
          className="block border rounded px-4 py-3 mt-1 w-full"
          placeholder="your@company.com"
          disabled={isSubmitting}
        />
        {errors.email?.message && (
          <p className="font-normal text-red-500">{errors.email?.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block font-medium text-[14px]" htmlFor="phone_number">
          Phone number
        </label>
        <input
          type="text"
          id="phone_number"
          {...register("phone_number")}
          className="block border rounded px-4 py-3 mt-1 w-full"
          placeholder="+1 (555) 000-0000"
          disabled={isSubmitting}
        />
        {errors.phone_number?.message && (
          <p className="font-normal text-red-500">
            {errors.phone_number?.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block font-medium text-[14px]">
          How can we help?
        </label>

        <textarea
          id="message"
          cols={30}
          rows={6}
          {...register("message")}
          className="block border rounded px-4 py-3 mt-1 w-full"
          placeholder="Tell us a little about the project..."
          disabled={isSubmitting}
        ></textarea>
        {errors.message?.message && (
          <p className="font-normal text-red-500">{errors.message?.message}</p>
        )}
      </div>

      <div className="font-medium text-[#344054]">
        <p className="block mb-5">
          How can DSTRCT support your business?
        </p>

        <div className="grid grid-cols-2 text-[16px]">
          <label htmlFor="website-design">
            <input
              type="checkbox"
              id="website-design"
              {...register("website_design")}
              className="border rounded inline-block mr-3"
              disabled={isSubmitting}
            />
            Website design
          </label>
          <label htmlFor="application-design">
            <input
              type="checkbox"
              id="application-design"
              {...register("application_design")}
              className="border rounded inline-block mr-3"
              disabled={isSubmitting}
            />
            Application design
          </label>
          <label htmlFor="graphic-design">
            <input
              type="checkbox"
              id="graphic-design"
              {...register("graphic_design")}
              className="border rounded inline-block mr-3"
              disabled={isSubmitting}
            />
            Graphic design
          </label>
          <label htmlFor="media-photography">
            <input
              type="checkbox"
              id="media-photography"
              {...register("media_photography")}
              className="border rounded inline-block mr-3"
              disabled={isSubmitting}
            />
            Media and Photography
          </label>
          <label htmlFor="video-photography">
            <input
              type="checkbox"
              id="video-photography"
              {...register("video_production")}
              className="border rounded inline-block mr-3"
              disabled={isSubmitting}
            />
            Video Production
          </label>
          <label htmlFor="other">
            <input
              type="checkbox"
              id="other"
              {...register("other")}
              className="border rounded inline-block mr-3"
              disabled={isSubmitting}
            />
            Other
          </label>
        </div>
      </div>

      <input
        type="submit"
        disabled={isSubmitting}
        value="Get started"
        className="cursor-pointer bg-dgpurple text-white w-full rounded-lg py-3 mt-6"
      />
    </form>
  );
}
