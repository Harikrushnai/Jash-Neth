import { gql } from "@apollo/client";
import client from "../../client";
import Layout from "../../components/layout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaArrowLeft } from "react-icons/fa";

export default function Department({ data }) {
  console.log(data);
  const [textColor, setTextColor] = useState("#000");
  const [bgColor, setBgColor] = useState("#fff");

  const [faqs, setFaqs] = useState([]);
  const [currentFaq, setCurrentFaq] = useState(0);

  const faqGrp = data?.departmentInfo?.faqGroup;

  useEffect(() => {
    setTextColor(data?.departmentInfo?.textColor);
    setBgColor(data?.departmentInfo?.primaryColor);
  }, [textColor, bgColor]);

  useEffect(() => {
    if (data?.departmentInfo?.faqGroup?.faqs) {
      setFaqs(data.departmentInfo.faqGroup.faqs);
    }
  }, []);

  console.log(currentFaq);

  return (
    <Layout preview="">
      <header className="h-screen w-full relative">
        <Image
          src={
            data?.departmentInfo?.heroImage?.node?.mediaItemUrl ||
            "/images/dept-hero.png"
          }
          alt="Department hero image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          className="object-cover"
        />

        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(to bottom, transparent, transparent, ${
              bgColor || "#fff"
            })`,
          }}
        ></div>
      </header>

      <article
        className="relative"
        style={{
          color: textColor,
          backgroundImage: `url(${
            data?.departmentInfo?.bgImage?.node?.mediaItemUrl ||
            "/images/design-dept-bg.png"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(to bottom, ${
              bgColor || "#fff"
            }, transparent 5%, transparent)`,
          }}
        ></div>

        <div className="z-20 relative">
          <div className="py-12">
            {data?.departmentInfo?.services?.nodes &&
              data?.departmentInfo?.services?.nodes?.length > 0 &&
              data.departmentInfo.services.nodes.map((service) => {
                return (
                  <section key={service.id} className="text-center py-16">
                    <h2 className="text-[56px] font-semibold">
                      {service.serviceInfo?.title || service.title}
                    </h2>
                    <p className="text-[20px] max-w-[768px] mx-auto">
                      {service.serviceInfo?.description ||
                        "Service description not added yet."}
                    </p>
                    <div className="my-4">Tools & Technology</div>
                    <Image
                      src={
                        service.serviceInfo?.displayImage?.node?.mediaItemUrl ||
                        "/images/ecc-service-mockup.png"
                      }
                      alt="Image of service"
                      width={875}
                      height={562}
                      className="mx-auto mt-8"
                    />

                    <div className="flex justify-center gap-6 text-black">
                      <Link
                        href={service.uri}
                        className="btn-services py-4 px-14 rounded-xl bg-white"
                      >
                        LEARN MORE
                      </Link>
                      <Link
                        href="/contact"
                        className="btn-services py-4 px-14 rounded-xl bg-white"
                      >
                        HIRE US!
                      </Link>
                    </div>
                  </section>
                );
              })}
          </div>

          <div className="z-3 flex justify-between items-center px-14 py-12">
            <div className="w-2/5">
              <svg width="559" height="197" viewBox="0 0 559 197" fill="none">
                <path
                  d="M517.53 134.848C375.689 135.81 233.848 136.772 92.0076 137.734C73.0425 137.865 52.2034 137.33 37.9351 124.825C25.6713 114.065 21.3659 97.0696 17.6891 81.1671C12.8737 60.3241 8.67508 36.2745 21.6743 19.2913C34.9819 1.90431 60.0433 0.0872484 81.9142 0.0159903C214.006 -0.411559 345.955 7.80688 477.785 16.0134C500.569 17.4386 525.512 19.7901 541.643 35.9538C557.132 51.4881 559.979 75.5615 558.745 97.4734C557.37 121.879 551.463 147.14 535.428 165.572C519.392 184.005 491.223 193.375 469.542 182.14C494.248 186.225 519.594 163.043 517.755 138.031L517.542 134.813L517.53 134.848Z"
                  fill={`${data.title === "Tech" ? "#fff" : bgColor}`}
                />
                <path
                  d="M545.102 145.735C551.298 127.209 553.055 106.611 551.429 87.1976C549.98 69.9027 544.663 51.7438 531.629 39.4799C517.718 26.3993 498.227 22.7415 479.781 21.4275C456.03 19.7347 432.088 19.5571 408.289 18.764C357.556 17.0594 306.824 15.5442 256.068 14.7037C205.336 13.8632 154.58 13.6857 103.836 14.6682C82.8023 15.0707 60.5936 13.9816 39.9161 18.5273C23.0608 22.2325 8.04531 31.6671 2.58512 48.7015C-3.12433 66.4817 1.75423 86.0848 6.37165 103.534C10.9535 120.852 16.9478 139.591 32.7942 149.949C49.8276 161.076 71.8582 159.277 91.2419 158.626C116.466 157.774 141.689 156.933 166.913 156.081C268.591 152.66 370.269 149.239 471.947 145.818C483.782 145.415 495.616 145.025 507.45 144.622C507.593 155.063 504.198 164.498 496.779 172.488C487.972 181.958 475.318 187.415 462.321 185.959C459.187 185.604 460.588 191.771 462.451 192.624C478.594 199.975 496.625 197.584 511.818 189.037C528.436 179.685 539.167 163.456 545.09 145.747L545.102 145.735ZM482.761 190.197C490.096 187.344 496.684 182.538 501.8 176.312C510.026 166.309 512.709 154.779 511.652 142.195C511.771 140.183 510.667 137.626 509.077 137.673C414.888 140.846 320.7 144.007 226.5 147.179C179.602 148.753 132.704 150.352 85.8054 151.914C67.312 152.53 45.3407 153.713 30.1116 141.272C15.5709 129.399 11.3808 108.186 7.47554 90.8317C3.27358 72.1282 1.62366 50.051 17.7549 36.2838C30.7407 25.2037 49.3765 23.3097 65.7808 22.5639C112.833 20.4095 160.111 20.658 207.188 20.9895C254.003 21.321 300.818 22.3509 347.621 23.7122C370.827 24.3869 394.033 25.1327 417.239 25.9258C439.198 26.6716 461.335 26.6834 483.236 28.5183C501.551 30.0572 521.314 34.2122 533.719 48.8909C546.075 63.5104 548.034 84.2737 547.405 102.598C546.146 139.354 531.107 182.81 489.491 189.57C487.248 189.937 484.992 190.138 482.749 190.197H482.761Z"
                  fill="#232323"
                />
              </svg>
              <Image
                src={`${
                  faqGrp?.puppet?.node?.mediaItemUrl ||
                  "/images/puppet-shutter.png"
                }`}
                alt="Puppet"
                width={`${faqGrp?.puppet?.node?.mediaDetails?.width}`}
                height={`${faqGrp?.puppet?.node?.mediaDetails?.height}`}
                className=""
              />
            </div>
            <div className="w-3/5">
              <h3 className="text-[40px] text-black font-semibold text-center">
                Frequently Asked Questions
              </h3>

              <div className="my-3">
                {currentFaq < 1 &&
                  faqs &&
                  faqs.length > 0 &&
                  faqs.map((faq, i) => {
                    return (
                      <button
                        key={i}
                        className="w-full lg:max-w-[731px] mx-auto cursor-pointer font-semibold text-[24px] text-black rounded-2xl my-6 px-8 py-6 shadow-btn-dark flex justify-between items-center"
                        style={{
                          backgroundColor:
                            data.title === "Tech" ? "#fff" : bgColor,
                        }}
                        onClick={(e) => setCurrentFaq(i + 1)}
                      >
                        <p>{faq.question}</p>
                        <p>+</p>
                      </button>
                    );
                  })}

                {currentFaq >= 1 && (
                  <div className="text-black my-6">
                    <button
                      onClick={() => setCurrentFaq(0)}
                      className="btn-services border-2 rounded-lg px-5 py-2 mb-4 font-light text-[21px]"
                      style={{
                        backgroundColor:
                          data.title === "Tech" ? "#fff" : bgColor,
                      }}
                    >
                      <FaArrowLeft />
                    </button>
                    <div
                      className="btn-services w-full p-[40px] border-2 rounded-2xl"
                      style={{
                        backgroundColor:
                          data.title === "Tech" ? "#fff" : bgColor,
                      }}
                    >
                      <h2 className="text-[28px] font-medium leading-8">
                        {faqs[currentFaq - 1].question}
                      </h2>
                      <p className="mt-5 font-light leading-6">
                        {faqs[currentFaq - 1].answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query MyQuery2 {
        departments {
          nodes {
            uri
          }
        }
      }
    `,
  });

  // console.log("ALL DEPARTMENTS", data.departments.nodes);

  // filter departments that do not belong to tech sub
  return {
    paths: data.departments.nodes.map((dept) => {
      return {
        params: {
          slug: dept.uri.substr(1, dept.uri.length - 1).split("/"),
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const uri = `/department/${context.params.slug.join("/")}/`;

  const { data } = await client.query({
    query: gql`
      query NewQuery($uri: String!) {
        departmentBy(uri: $uri) {
          title
          departmentInfo {
            primaryColor
            textColor
            heroImage {
              node {
                mediaItemUrl
              }
            }
            bgImage {
              node {
                mediaItemUrl
              }
            }
            faqGroup {
              puppet {
                node {
                  mediaItemUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              faqs {
                question
                answer
              }
              puppetText
            }
            services {
              nodes {
                ... on Service {
                  id
                  uri
                  title
                  serviceInfo {
                    title
                    description
                    listingBackgroundImage {
                      node {
                        mediaItemUrl
                      }
                    }
                    displayImage {
                      node {
                        mediaDetails {
                          height
                          width
                        }
                        mediaItemUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  //   console.log("DEPARTMENT", data.departmentBy);

  return {
    props: {
      data: data.departmentBy,
    },
    // revalidate: 10
  };
};
