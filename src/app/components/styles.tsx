import Image from "next/image"
import party from "../../../public/party.png"
import casual from "../../../public/casual.png"
import formal from "../../../public/formal.png"
import gym from "../../../public/gym.png"

const DressStyles = () => {
    return(
        <div className="w-[358px] md:w-[1239px] h-[975px] md:h-[866px] absolute top-[2123px] md:top-[2417px] left-[16px] md:left-[100px] rounded-[20px] md:rounded-[40px] bg-[#F0F0F0]">
            <p className="uppercase w-[246px] md:w-[687px] h-[72px] md:h-[58px] absolute top-[40px] md:top-[70px] left-[56px] md:left-[276px] font-bold text-[32px] md:text-[48px] leading-[36px] md:leading-[57.6px] text-center text-black font-integralBold">BROWSE BY dress STYLE</p>
            
            <div className="w-[310px] md:w-[407px] h-[190px] md:h-[289px] absolute top-[140px] md:top-[192px] left-[24px] md:left-[64px] rounded-[20px] bg-white">
                <p className="w-[76px] md:w-[114px] h-[32px] md:h-[49px] absolute top-[16px] md:top-[25px] left-[24px] md:left-[36px] font-bold text-[24px] md:text-[36px] leading-[32.4px] md:leading-[48.6px] text-black">Casual</p>
                <Image src={casual} alt="casual" className="h-full"></Image>
            </div>

            <div className="w-[310px] md:w-[684px] h-[190px] md:h-[289px] absolute top-[346px] md:top-[192px] left-[24px] md:left-[491px] rounded-[20px] bg-white">
                <p className="w-[77px] md:w-[116px] h-[32px] md:h-[49px] absolute top-[16px] md:top-[25px] left-[24px] md:left-[36px] font-bold text-[24px] md:text-[36px] leading-[32.4px] md:leading-[48.6px] text-black">Formal</p>
                <Image src={formal} alt="formal" className="h-full"></Image>
            </div>

            <div className="w-[310px] md:w-[407px] h-[190px] md:h-[289px] absolute top-[758px] md:top-[501px] left-[24px] md:left-[768px] rounded-[20px] bg-white">
                <p className="w-[53px] md:w-[80px] h-[32px] md:h-[49px] absolute top-[16px] md:top-[25px] left-[24px] md:left-[36px] font-bold text-[24px] md:text-[36px] leading-[48.6px] text-black">Gym</p>
                <Image src={gym} alt="gym" className="h-full"></Image>
            </div>

            <div className="w-[310px] md:w-[684px] h-[190px] md:h-[289px] absolute top-[552px] md:top-[501px] left-[24px] md:left-[64px] rounded-[20px] bg-white">
                <p className="w-[59px] md:w-[89px] h-[32px] md:h-[49px] absolute top-[16px] md:top-[25px] left-[24px] md:left-[36px] font-bold text-[24px] md:text-[36px] leading-[32.4px] md:leading-[48.6px] text-black">Party</p>
                <Image src={party} alt="party" className="h-full"></Image>
            </div>
        </div>
    )
}

export default DressStyles