import Image from "next/image"
import btshirt from "../../../public/btshirt.png"
import bpent from "../../../public/bpent.png"
import pshit from "../../../public/pshit.png"
import oshirt from "../../../public/oshirt.png"
import bsstars from "../../../public/blackshirt-stars.png"
import pstars from "../../../public/pentstars.png"
import rsstars from "../../../public/rsstars.png"
import osstars from "../../../public/osstars.png"

const NewArrivals = () => {
    return(
        <>
            <p className="w-[269px] md:w-[403px] h-[38px] md:h-[58px] absolute top-[1147px] md:top-[991px] left-[61px] md:left-[518px] text-black font-bold text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] text-center font-integralBold">NEW ARRIVALS</p>

            <div className="w-[198px] md:w-[295px] h-[200.01px] md:h-[298px] absolute top-[1217px] md:top-[1104px] left-[16px] md:left-[100px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]">
                <Image src={btshirt} alt="btshirt"></Image>
             </div>
             <p className="w-[46px] md:w-[55px] h-[27px] md:h-[32px] font-bold leading-[32.4px] text-black text-[20px] md:text-[24px] absolute top-[1480px] left-[16px] md:left-[100px]">$120</p>
          
            <p className="w-[180px] md:w-[225px] h-[22px] md:h-[27px] absolute top-[1427.01px] md:top-[1418px] left-[16px] md:left-[100px] font-bold text-[16px] md:text-[20px] leading-[21.6px] md:leading-[27px] text-black">T-shirt with Tape Details</p>
            <div className="w-[127px] md:w-[150px] h-[16px] md:h-[19px] absolute top-[1453px] left-[16px] md:left-[100px] flex gap-[11px] md:gap-[13px]">
                <Image src={bsstars} alt="bsstars" className="w-[104px] h-[18.49px] flex gap-[5.31px]"></Image>
                <p className="w-[33px] h-[19px] font-normal text-[14px] leading-[18.9px]">4.5/5</p>
            </div>


            <div className="w-[198px] md:w-[295px] h-[200px] md:h-[298px] absolute top-[1217px] md:top-[1104px] left-[230px] md:left-[415px] rounded-[13.42px] md:rounded-[20px]">
                <Image src={bpent} alt="bpent" className="w-[171px] md:w-[268px] h-[200px] md:h-[298px] top-[-51px] left-[14px]"></Image>
            </div>
            <p className="w-[120px] md:w-[150px] h-[22px] md:h-[27px] absolute top-[1427px] md:top-[1418px] left-[230px] md:left-[415px] font-bold text-[16px] md:text-[20px] leading-[21.6px] md:leading-[27px] text-black">Skinny Fit Jeans</p>
            <div className="w-[106px] md:w-[126.2px] h-[16px] md:h-[19px] absolute top-[1453px] left-[230px] md:left-[415px] flex gap-[11px] md:gap-[13px]">
                <Image src={pstars} alt="pstars" className="w-[80.2px] h-[18.49px] flex gap-[5.31px]"></Image>
                <p className="w-[33px] h-[19px] font-normal text-[14px] leading-[18.9px]">3.5/5</p>
            </div>

            
            <p className="w-[51px] h-[27px] font-bold text-[20px] leading-[27px] text-black block md:hidden absolute top-[1481.2px] left-[230px]">$240</p>
            <p className="w-[51px] h-[27px] font-bold text-[20px] leading-[27px] line-through text-black text-opacity-40  absolute top-[1481.2px] left-[286px] block md:hidden">$260</p>
            <div className="w-[42px] h-[20px] rounded-[62px] py-[6px] px-[14px] md:hidden flex gap-[12px] bg-[#FF3333] bg-opacity-10 absolute top-[1485px] left-[342px] items-center justify-center">
                    <p className="w-[26px] h-[14px] font-medium text-[10px] leading-[13.5px] text-[#FF3333]">-20%</p>
            </div>

            <div className="w-[200px] h-[32px] absolute top-[1480px] left-[415px] hidden md:flex gap-[10px]">
                <p className="w-[61px] h-[32px] font-bold text-[24px] leading-[32.4px] text-black md:block hidden">$240</p>
                <p className="w-[61px] h-[32px] font-bold text-[24px] leading-[32.4px] line-through text-black text-opacity-40">$260</p>
                <div className="w-[58px] h-[28px] rounded-[62px] py-[6px] px-[14px] flex gap-[12px] bg-[#FF3333] bg-opacity-10">
                    <p className="w-[31px] h-[16px] font-medium text-[12px] leading-[16.2px] text-[#FF3333]">-20%</p>
                </div>
            </div>

            <div className="w-[295px] h-[298px] absolute top-[1104px] left-[730px] rounded-[20px] md:block hidden">
                <Image src={pshit} alt="p"></Image>
            </div>
            <p className="md:block hidden w-[151px] h-[27px] absolute top-[1418px] left-[730px] font-bold text-[20px] leading-[27px]">Checked Shirt</p>
            <div className="md:flex hidden w-[150px] h-[19px] absolute top-[1453px] left-[730px]  gap-[13px]">
                <Image src={rsstars} alt="rsstars" className="w-[104px] h-[18.49px]"></Image>
                <p className="w-[33px] h-[19px] font-normal text-[14px] leading-[18.9px]">4.5/5</p>
            </div>
            <p className="md:block hidden w-[56px] h-[32px] absolute top-[1480px] left-[730px] font-bold text-[24px] leading-[32.4px] text-black">$180</p>

            <div className="md:block hidden w-[295px] h-[298px] absolute top-[1104px] left-[1045px] rounded-[20px]">
                <Image src={oshirt} alt="oshirt"></Image>
            </div>
            <p className="md:block hidden w-[199px] h-[27px] absolute top-[1418px] left-[1045px] font-bold text-[20px] leading-[27px]">Sleeve Striped T-shirt</p>
            <div className="md:flex hidden w-[150px] h-[19px] absolute top-[1453px] left-[1045px]  gap-[13px]">
                <Image src={osstars} alt="osstars" className="w-[104px] h-[18.49px]"></Image>
                <p className="w-[33px] h-[19px] font-normal text-[14px] leading-[18.9px]">4.5/5</p>
            </div>
            <div className="md:flex hidden w-[189px] h-[32px] absolute top-[1480px] left-[1045px]  gap-[10px]">
                <p className="w-[55px] h-[32px] font-bold text-[24px] leading-[32.4px]">$130</p>
                <p className="w-[56px] h-[32px] font-bold text-[24px] leading-[32.4px] line-through text-black text-opacity-40">$160</p>
                <div className="w-[58px] h-[28px] rounded-[62px] py-[6px] px-[14px] flex gap-[12px] bg-[#FF3333] bg-opacity-10">
                    <p className="w-[32px] h-[16px] text-[#FF3333] text-[12px] leading-[16.2px]">-30%</p>
                </div>
            </div>

            <div className="w-[358px] md:w-[218px] h-[46px] md:h-[52px] absolute top-[1524px] md:top-[1548px] left-[16px] md:left-[611px] rounded-[62px] border-[1px] py-[16px] px-[54px] flex gap-[12px] border-black border-opacity-10 justify-center items-center">
                <p className="w-[58px] h-[22px] font-medium text-[16px] leading-[21.6px]">View All</p>
            </div>
        </>
    )
}

export default NewArrivals