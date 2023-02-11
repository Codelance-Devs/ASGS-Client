import { LANDINGPAGE } from "@/utils/constants"
import Image from "next/image"
import prop1 from "../public/assets/prop1.svg"
import prop2 from "../public/assets/prop2.svg"
import prop3 from "../public/assets/prop3.svg"
import BG from "../public/assets/bg.jpg"

const LandingPage = () => {
  return (
    <main className="w-full md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%] mx-auto flex flex-col md:flex-row justify-start items-center min-h-screen">
      <section className="w-[80%] md:w-[50%]">
        <h1 className="font-primaryFont text-primaryText text-[9vw] md:text-[5.5vw] mt-[5%] md:mt-[0%]">
          <p>
            {LANDINGPAGE.TITLE_P1}
            <span className="ml-[1%] font-secondaryFont">{LANDINGPAGE.TITLE_P2}</span>
          </p>
          <p>{LANDINGPAGE.TITLE_P3}</p>
        </h1>
        <div className="flex text-center font-base text-sm my-[7%]">
          <div className="flex flex-col items-center max-w-[120px] ">
            <div><Image width={60} height={60} src={prop1} alt=""/></div>
            <p className="text-primaryText font-secondaryFont mt-[5%]">{LANDINGPAGE.SUB_TITLE_1}</p>
          </div>
          <div className="flex flex-col items-center  max-w-[120px] mx-[5%]">
            <div><Image width={60} height={60} src={prop2} alt=""/></div>
            <p className="text-primaryText font-secondaryFont mt-[5%]">{LANDINGPAGE.SUB_TITLE_2}</p>
          </div>
          <div className="flex flex-col items-center max-w-[120px] ">
            <div><Image width={72} height={72} src={prop3} alt=""/></div>
            <p className="text-primaryText font-secondaryFont mt-[5%]">{LANDINGPAGE.SUB_TITLE_3}</p>
          </div>
        </div>
        <div>
            <button className="text-primaryText font-secondaryFont bg-secondaryBg border border-primaryText rounded-md px-[8%] py-[3%]">{LANDINGPAGE.BUTTON}</button>
        </div>
      </section>
      <section className="w-[90%] md:w-[50%]">
        <div className="p-[3%]">
          <Image className="border-4 border-secondaryBg rounded-t-full" src={BG} alt=""/>
        </div>
      </section>
    </main>
  )
}

export default LandingPage