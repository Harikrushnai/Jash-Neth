import Image from "next/image";
import Review from "./review";
import Link from "next/link";

import { FaGoogle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Reviews({ textColor = "#000", bgColor = "#fff" }) {
  const reviews = [
    {
      stars: 5,
      name: "Client Name",
      company: "Company",
      thumbnail: "",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
    },
    {
      stars: 2,
      name: "George Soros",
      company: "Alphabet Inc.",
      thumbnail: "",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
    },
    {
      stars: 1,
      name: "Client Name",
      company: "Access Holdings",
      thumbnail: "",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
    },
  ];
  // const reviewsBlock = reviews.map((review, index) => <Review key={index} review={review} />)

  return (
    <section className="text-center sm:py-[60px] sm:px-[60px] p-4">
      <Image
        src="/images/google-reviews.svg"
        alt="Google Reviews Image"
        width={106}
        height={44}
        className="mx-auto"
      />

      <div className="mt-4">
        <h2 className="capitalize sm:text-[36px] text-[24px] font-semibold">
          our clients reviews
        </h2>
        <p className="max-w-[420px] mx-auto mt-1">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </p>
      </div>

      <div className="sm:my-12 my-6">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {reviews &&
            reviews.map((review, index) => {
              return (
                <SwiperSlide key={index}>
                  <Review review={review} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>

      <div className="mt-4 flex gap-5 justify-center items-center sm:flex-nowrap flex-wrap">
        <Link
          href="/contact"
          style={{ backgroundColor: bgColor, color: textColor }}
          className="btn-services py-[10px] px-[18px] rounded-xl flex gap-2 sm:justify-between justify-center items-center sm:w-auto w-full"
        >
          <FaGoogle />
          Leave a Review
        </Link>
        <Link
          href="/contact"
          style={{ backgroundColor: bgColor, color: textColor }}
          className="block btn-services py-[10px] px-[18px] rounded-xl sm:w-auto w-full"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
