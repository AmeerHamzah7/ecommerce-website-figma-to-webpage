import Image from "next/image"
import versage from "../../../public/versage.png"
import zara from "../../../public/zara.png"
import gucci from "../../../public/gucci.png"
import prada from "../../../public/prada.png"
import calvin from "../../../public/calvin.png"

const Partners = () => {
    return (
        <>
            <div className="w-[390px] md:w-[1440px] h-[146px] md:h-[122px] absolute top-[951px] md:top-[797px] bg-black items-center flex flex-wrap"></div>
            <Image src={versage} alt="v" className="w-[116.74px] md:w-[166.48px] h-[23.25px] md:h-[33.16px] top-[991.4px] md:top-[841px] left-[16px] md:left-[100px] absolute"></Image>
            <Image src={zara} alt="z" className="w-[63.81px] md:w-[91px] h-[26.65px] md:h-[38px] top-[990px] md:top-[839px] left-[166.74px] md:left-[372.48px] absolute"></Image>
            <Image src={gucci} alt="g" className="w-[109.39px] md:w-[156px] h-[25.24px] md:h-[36px] top-[990.7px] md:top-[840px] left-[264.55px] md:left-[569.48px] absolute"></Image>
            <Image src={prada} alt="p" className="w-[127px] md:w-[194px] h-[21px] md:h-[32px] top-[1037px] md:top-[842px] left-[48px] md:left-[831.48px] absolute"></Image>
            <Image src={calvin} alt="c" className="w-[134.84px] md:w-[206.79px] h-[21.75px] md:h-[33.35px] top-[1036.82px] md:top-[841px] left-[206.16px] md:left-[1131.48px] absolute"></Image>
        </>
    )
}

export default Partners