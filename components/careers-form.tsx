import Link from "next/link";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CareersFormSchema } from "../lib/form-validation";
import { sendCareerEmail } from "../lib/send-email";

export type CareerFormData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  message: string;
};

export default function CareersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    watch,
  } = useForm<CareerFormData>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      message: "",
    },
    resolver: zodResolver(CareersFormSchema),
  });

  const onSubmit: SubmitHandler<CareerFormData> = (data) =>
    sendCareerEmail(data);

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-[64px]">
      <div className="grid grid-cols-2 gap-8">
        <div className="mb-6">
          <label
            className="block text-[14px] font-medium leading-5"
            htmlFor="first-name"
          >
            First name
          </label>
          <input
            type="text"
            id="first-name"
            {...register("first_name")}
            className="block border rounded px-4 py-3 mt-1 w-full"
            placeholder="First name"
            disabled={isSubmitting}
          />
          {errors.first_name?.message && (
            <p className="font-normal text-red-500">
              {errors.first_name?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-[14px] font-medium leading-5"
            htmlFor="last-name"
          >
            Last name
          </label>
          <input
            type="text"
            id="last-name"
            {...register("last_name")}
            className="block border rounded px-4 py-3 mt-1 w-full"
            placeholder="Last name"
            disabled={isSubmitting}
          />
          {errors.last_name?.message && (
            <p className="font-normal text-red-500">
              {errors.last_name?.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label
          className="block text-[14px] font-medium leading-5"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register("email")}
          className="block border rounded px-4 py-3 mt-1 w-full"
          placeholder="you@company.com"
          disabled={isSubmitting}
        />
        {errors.email?.message && (
          <p className="font-normal text-red-500">{errors.email?.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          className="block text-[14px] font-medium leading-5"
          htmlFor="phone_number"
        >
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
        <label
          htmlFor="message"
          className="block text-[14px] font-medium leading-5"
        >
          Message
        </label>

        <textarea
          id="message"
          cols={30}
          rows={6}
          {...register("message")}
          className="block border rounded px-4 py-3 mt-1 w-full"
          disabled={isSubmitting}
        ></textarea>
        {errors.message?.message && (
          <p className="font-normal text-red-500">{errors.message?.message}</p>
        )}
      </div>

      <label htmlFor="" className="text-[#667085]">
        <input
          type="checkbox"
          name=""
          id=""
          className="border rounded mr-2"
          required
        />
        You agree to our friendly{" "}
        <Link href="/privacy-policy" className="link">
          privacy policy
        </Link>
      </label>

      <input
        type="submit"
        disabled={isSubmitting}
        value="Send message"
        className="cursor-pointer bg-[#A7D7F8] border border-black w-full rounded-lg py-3 mt-6"
      />
    </form>
  );
}
