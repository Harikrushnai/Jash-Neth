import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Reviews from "./reviews";
export default function Footer() {
  const path = usePathname();

  const partners = [
    {
      name: "Microsoft",
      logo: "/images/microsoft.svg",
    },
    {
      name: "Samsung",
      logo: "/images/samsung.svg",
    },
    {
      name: "BloomVerse",
      logo: "/images/bloomverse.svg",
    },
    {
      name: "MKV",
      logo: "/images/mkv.svg",
    },
    {
      name: "Legendairs",
      logo: "/images/legendairs.svg",
    },
    {
      name: "SimpleXY",
      logo: "/images/simplexy.svg",
    },
  ];

  const footer =
    path === "/" ? null : (
      <>
        <Reviews />

        <section className="sm:py-8 sm:px-[60px] p-5 text-center">
          <h2 className="text-[36px] font-semibold">
            Trusted by the <span className="text-[#B590F9]">best</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 place-items-center mt-6 mb-12">
            {partners &&
              partners.map((partner) => {
                return (
                  <Image
                    key={partner.name}
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={100}
                  />
                );
              })}
          </div>
        </section>

        <div className="sm:px-[150px] border-t sm:pt-[60px] p-5">
          <div className="contact-slab w-full text-center sm:py-[41px] p-5 rounded-lg bg-gradient-to-r from-[#EFFBD3] to-[#FBD3E4]">
            <p className="sm:text-[30px] text-[18px] font-semibold mb-7 leading-tight">
              Let&apos;s connect and achieve <br /> your business goals together
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="btn-services py-[10px] px-[18px] rounded-md text-black bg-white"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-center sm:py-[48px] py-5 sm:flex-nowrap flex-wrap">
            <Link href="/" className="mb-4">
              <Image
                src="/images/logo-black.svg"
                alt="DB black logo"
                width={131}
                height={50}
              />
            </Link>

            <ul className="links flex items-center flex-wrap sm:mb-0 mb-5 sm:justify-start justify-between sm:gap-0 gap-3">
              <Link href="/">
                <li className="pr-10">Home</li>
              </Link>
              <Link href="/about">
                <li className="pr-10">About Us</li>
              </Link>
              <Link href="/#faqs">
                <li className="pr-10">FAQs</li>
              </Link>
              <Link href="/contact">
                <li className="pr-10">Contact Us</li>
              </Link>
            </ul>

            <ul className="social flex gap-2 items-center">
              <Link href="/">
                <Image
                  src="/icons/facebook.svg"
                  alt="facebook icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/icons/twitter.svg"
                  alt="twitter icon"
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="/">
                <Image
                  src="/icons/instagram.svg"
                  alt="instagram icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/icons/linkedin.svg"
                  alt="linkedin icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/icons/youtube.svg"
                  alt="youtube icon"
                  width={24}
                  height={24}
                />
              </Link>
            </ul>
          </div>

          <p className="border-t text-center text-[16px] leading-6 sm:text-[#E1E4ED] pt-5 pb-5 sm:pb-[80px]">
            Copyright &copy; 2024 DSTRCT Group | All Rights Reserved |{" "}
            <Link href="/terms-conditions" className="link text-[#6D758F]">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link href="/privacy-policy" className="link text-[#6D758F]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </>
    );

  return footer;
}
