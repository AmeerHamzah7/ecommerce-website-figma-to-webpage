import Image from "next/image"
import fivestar from "../../../public/5starscustomer.png"
import verified from "../../../public/tickmark.png"

const Customers = () => {
    return(
        <>
        <p className="w-[286px] md:w-[654px] h-[72px] md:h-[58px] absolute top-[3148px] md:top-[3363px] left-[16px] md:left-[100px] font-bold text-[32px] md:text-[48px] leading-[36px] md:leading-[57.6px] text-black font-integralBold">OUR HAPPY CUSTOMERS</p>

<div className="flex">
        <div className="w-[358px] md:w-[400px] h-[186.19px] md:h-[240px] absolute top-[3244px] md:top-[3461px] left-[16px] md:left-[100px] rounded-[20px] border-[1px] py-[24px] px-[24px] md:py-[28px] md:px-[32px] flex gap-[342px] border-black border-opacity-10">
            <div className="w-[310px] md:w-[336px] h-[138.19px] md:h-[161.58px] justify-between">
                <div className="w-[336px] h-[161.58px] flex flex-col gap-[15px]">
                    <Image src={fivestar} alt="fi" className="w-[118px] md:w-[138.84px] h-[19.19px] md:h-[22.58px]"></Image>

                    <div className="w-[336px] h-[124px] flex flex-col gap-[12px]">
                        <div className="w-[110px] h-[24px] flex gap-[4px]">
                            <p className="w-[66px] md:w-[82px] h-[12px] md:h-[15px] font-bold text-[16px] md:text-[20px] leading-[22px] text-black">Sarah M.</p>
                            <Image src={verified} alt="verified"></Image>
                        </div>

                        <p className="w-[310px] md:w-[336px] h-[80px] md:h-[88px] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-black text-opacity-60">&quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&rdquo;</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="hidden md:flex w-[400px] h-[240px] absolute top-[3461px] left-[520px] rounded-[20px] border-[1px] py-[28px] px-[32px] gap-[342px] border-black border-opacity-10">
            <div className="w-[336px] h-[161.58px] justify-between">
                <div className="w-[336px] h-[161.58px] flex flex-col gap-[15px]">
                    <Image src={fivestar} alt="fi" className="w-[138.84px] h-[22.58px]"></Image>

                    <div className="w-[336px] h-[124px] flex flex-col gap-[12px]">
                        <div className="w-[110px] h-[24px] flex gap-[4px]">
                            <p className="w-[82px] h-[15px] font-bold text-[20px] leading-[22px] text-black">Alex K.</p>
                            <Image src={verified} alt="verified"></Image>
                        </div>

                        <p className="w-[336px] h-[88px] font-normal text-[16px] leading-[22px] text-black text-opacity-60">&quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&rdquo;</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="hidden md:flex w-[400px] h-[240px] absolute top-[3461px] left-[940px] rounded-[20px] border-[1px] py-[28px] px-[32px] gap-[342px] border-black border-opacity-10">
            <div className="w-[336px] h-[161.58px] justify-between">
                <div className="w-[336px] h-[161.58px] flex flex-col gap-[15px]">
                    <Image src={fivestar} alt="fi" className="w-[138.84px] h-[22.58px]"></Image>

                    <div className="w-[336px] h-[124px] flex flex-col gap-[12px]">
                        <div className="w-[110px] h-[24px] flex gap-[4px]">
                            <p className="w-[82px] h-[15px] font-bold text-[20px] leading-[22px] text-black">James L.</p>
                            <Image src={verified} alt="verified"></Image>
                        </div>

                        <p className="w-[336px] h-[88px] font-normal text-[16px] leading-[22px] text-black text-opacity-60">&quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&rdquo;</p>
                    </div>
                </div>
            </div>
        </div>
</div>
        </>
    )
}

export default Customers