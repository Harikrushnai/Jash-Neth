import Layout from "../.././components/layout";
import Image from "next/image";

export default function Job() {
  return (
    <>
      <Layout preview="">
        <div className="mt-[64px]">
          <div className="bg-[#FDFADC]">
            <div className="bg-[url('/images/dust.png')] bg-[length:100%] bg-center	bg-no-repeat">
              <div className="bg-[url('/images/blended-tree.png')] bg-[length:contain] bg-center	bg-no-repeat">
                <div
                  className="bg-[url('/images/studijobos-roadmap.png')] bg-[length:100%] bg-[unset] 
                bg-[center_top_62px] bg-no-repeat relative overflow-hidden md:pt-[140px] md:pb-[80px] xl:pt-[186px] xl:pb-[274px] lg:pt-[130px] lg:pb-[100px] sm:pt-[140px] sm:pb-[80px]"
                >
                  <div className="xl:pl-[116px] lg:pl-[60px] md:pl-[40px] sm:pl-[30px]">
                    <div>
                      <h1 className="text-[60px] text-[#E56B2E] leading-[69.3px] font-semibold w-full max-w-[32%] md:text-[40px] md:leading-[50px] sm:text-[30px] sm:leading-[40px]">
                        Studijo Bos Website
                      </h1>
                      <p className="text-[#0A0A09] md:text-[18px] md:leading-[30px] font-normal mt-6 md:mt-4 md:mb-10 sm:mt-3 sm:mb-8 w-full md:max-w-[30%] sm:max-w-[36%] mb-[87px] sm:text-[16px] sm:leading-[20px]">
                        We don't just build websites, we inspire journeys.
                        <span className="font-semibold">(See: Studijobos)</span>
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-5 mb-[30px] md:mb-6 sm:mb-3">
                        <div className="bg-[#E56B2E] w-[32px] h-[32px] flex items-center justify-center">
                          <img src="/images/user_icon.svg" alt="" />
                        </div>
                        <div>
                          <p className="text-[#626262] text-[10px] leading-[9px]">
                            Client:
                          </p>
                          <h4 className="text-[#252525] text-[18px] leading-[20.79px] font-medium">
                            Studijo BOS
                          </h4>
                        </div>
                      </div>
                      <div className="flex gap-5 mb-[30px] md:mb-6 sm:mb-3">
                        <div className="bg-[#E56B2E] w-[32px] h-[32px] flex items-center justify-center">
                          <img src="/images/Industry_icon.svg" />
                        </div>
                        <div>
                          <p className="text-[#626262] text-[10px] leading-[9px]">
                            Industry:
                          </p>
                          <h4 className="text-[#252525] text-[18px] leading-[20.79px] font-medium">
                            Industry Here
                          </h4>
                        </div>
                      </div>
                      <div className="flex gap-5 mb-[30px] md:mb-6 sm:mb-3">
                        <div className="bg-[#E56B2E] w-[32px] h-[32px] flex items-center justify-center">
                          <img src="/images/date_icon.svg" />
                        </div>
                        <div>
                          <p className="text-[#626262] text-[10px] leading-[9px]">
                            Release Date:
                          </p>
                          <h4 className="text-[#252525] text-[18px] leading-[20.79px] font-medium">
                            Studijo
                          </h4>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div className="bg-[#E56B2E] w-[32px] h-[32px] flex items-center justify-center">
                          <img src="/images/delivery_icon.svg" />
                        </div>
                        <div>
                          <p className="text-[#626262] text-[10px] leading-[9px]">
                            Deliverables
                          </p>
                          <h4 className="text-[#252525] text-[18px] leading-[20.79px] font-medium w-full max-w-[40%]">
                            Website Development Social Media Management Events
                            Management
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute 2xl:top-[100px] xl:top-[120px] xl:h-[840px] xl:right-[-50px] lg:top-[108px] lg:h-[600px] lg:right-[20px] md:top-[98px] md:left-[230px] sm:top-[89px] sm:left-[170px]">
                    <img
                      src="/images/hero-bg.png"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute top-[40px] right-0 md:w-[18%] sm:max-w-[14%]">
                    <img
                      src="/images/studijobos-logo.png"
                      className="w-full h-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
