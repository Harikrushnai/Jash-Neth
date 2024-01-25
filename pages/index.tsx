import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import { COMPANY_NAME } from "../lib/constants";
import Navbar from "../components/navbar";
import Image from "next/image";

import localFont from "next/font/local";
const myFont = localFont({ src: "../public/fonts/ChristmasSheep.ttf" });

export default function Index() {
  return (
    <>
      <Head>
        <title>{`Website for ${COMPANY_NAME}`}</title>
      </Head>
      <Layout preview="">
        <main className="h-screen overflow-hidden bg-homepage bg-cover bg-center flex align-center justify-between px-[120px]">
          <div className="relative w-2/5 flex flex-col items-center">
            {/* previous dimension: 539x190 */}
            <svg
              width="439"
              height="130"
              viewBox="0 0 539 190"
              fill="none"
              className="absolute top-20 left-0"
            >
              <path
                d="M498.498 129.871C362.058 130.797 225.618 131.722 89.1788 132.647C70.9358 132.773 50.8903 132.259 37.1654 120.232C25.3685 109.884 21.227 93.5393 17.6903 78.2458C13.0582 58.2008 9.01949 35.0721 21.5237 18.7392C34.3245 2.01792 58.4316 0.270431 79.4697 0.201901C206.531 -0.209277 333.456 7.69448 460.266 15.5868C482.183 16.9574 506.176 19.2189 521.692 34.7637C536.592 49.7031 539.33 72.8548 538.144 93.9276C536.82 117.399 531.139 141.693 515.714 159.419C500.289 177.145 473.193 186.157 452.337 175.352C476.102 179.281 500.483 156.986 498.714 132.932L498.509 129.837L498.498 129.871Z"
                fill="#A7D7F8"
              />
              <path
                d="M525.02 140.342C530.98 122.525 532.67 102.717 531.106 84.0462C529.713 67.4136 524.597 49.9499 512.06 38.1557C498.679 25.5759 479.93 22.0581 462.187 20.7945C439.339 19.1665 416.309 18.9957 393.416 18.233C344.616 16.5936 295.816 15.1364 246.992 14.3281C198.192 13.5198 149.369 13.3491 100.557 14.294C80.3242 14.681 58.9611 13.6337 39.071 18.0053C22.8575 21.5686 8.41379 30.642 3.16153 47.0241C-2.33052 64.1235 2.36227 82.9761 6.80386 99.7567C11.2112 116.412 16.9773 134.434 32.2202 144.395C48.605 155.096 69.7968 153.366 88.4424 152.74C112.706 151.92 136.969 151.112 161.232 150.292C259.038 147.002 356.845 143.712 454.651 140.422C466.035 140.035 477.418 139.659 488.802 139.272C488.939 149.313 485.673 158.386 478.537 166.071C470.065 175.178 457.894 180.427 445.391 179.026C442.377 178.685 443.724 184.616 445.517 185.436C461.045 192.505 478.389 190.206 493.004 181.986C508.989 172.993 519.311 157.385 525.008 140.353L525.02 140.342ZM465.053 183.102C472.109 180.358 478.446 175.736 483.367 169.748C491.28 160.128 493.86 149.04 492.844 136.938C492.958 135.003 491.896 132.544 490.366 132.589C399.765 135.64 309.163 138.68 218.55 141.731C173.438 143.245 128.325 144.782 83.2129 146.285C65.4237 146.877 44.2891 148.015 29.6398 136.05C15.6528 124.632 11.6222 104.231 7.86573 87.5412C3.82376 69.5539 2.23667 48.322 17.7537 35.0819C30.245 24.4261 48.1712 22.6046 63.9508 21.8874C109.212 19.8154 154.689 20.0545 199.973 20.3732C245.006 20.692 290.038 21.6825 335.059 22.9917C357.381 23.6406 379.703 24.3578 402.026 25.1206C423.149 25.8378 444.443 25.8492 465.509 27.6137C483.127 29.0937 502.138 33.0896 514.07 47.2063C525.956 61.266 527.84 81.2343 527.235 98.8573C526.025 134.206 511.558 175.998 471.527 182.499C469.369 182.851 467.199 183.045 465.041 183.102H465.053Z"
                fill="#232323"
              />
            </svg>

            {/* previous dimension: 398x687 */}
            <Image
              src="/images/puppet-paul2.png"
              alt="Puppet"
              width={258}
              height={487}
              className="block absolute bottom-2"
            />
          </div>

          <div className="rs w-1/2 flex flex-col">
            <div className="mt-auto text-center">
              <div className="heading">
                <h1
                  className={`${myFont.className} text-[44px] text-[#233C4A] leading-tight`}
                >
                  Welcome to DSTRCT Tech
                </h1>
                <p className="text-[18px] capitalize">
                  where every detail tells a story
                </p>
              </div>

              <div className="search flex align-center relative my-4">
                {/* figma dimension: 72x75 */}
                <Image
                  className="absolute bottom-20 left-3.5"
                  src="/images/mirror.svg"
                  alt="Search Icon"
                  width={52}
                  height={55}
                />
                <input
                  className="px-8 py-3 ml-12 outline-0 mt-3 mb-20 w-full rounded-3xl"
                  type="text"
                  placeholder="What are you looking for?"
                />
              </div>
            </div>

            <div className="footer">
              {/* figma dimension: 605x450 */}
              <Image
                src="/images/signposts.svg"
                alt="Sign Posts"
                width={305}
                height={150}
              />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
