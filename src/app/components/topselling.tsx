import Image from "next/image"
import gshirt from "../../../public/gshirt.png"
import blackpent from "../../../public/blackpent.png"
import blueshorts from "../../../public/blueshorts.png"
import orangeshirt from "../../../public/orangeShirt.png"
import bsstars from "../../../public/blackshirt-stars.png"
import fivstars from "../../../public/5stars.png"
import frstars from "../../../public/4stars.png"
import tstars from "../../../public/3stars.png"

const TopSelling = () => {
    return(
        <>
            <p className="w-[231px] md:w-[346px] h-[38px] md:h-[58px] absolute top-[1650px] md:top-[1728px] left-[80px] md:left-[546px] text-black font-bold text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] text-center font-integralBold">top selling</p>

            <div className="w-[198px] md:w-[295px] h-[200px] md:h-[298px] absolute top-[1720px] md:top-[1841px] left-[16px] md:left-[100px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]">
                <Image src={gshirt} alt="gshirt"></Image>
            </div>
            <p className="w-[154px] md:w-[194px] h-[22px] md:h-[27px] absolute top-[1930px] md:top-[2155px] left-[16px] md:left-[100px] font-bold text-[16px] md:text-[20px] leading-[21.6px] md:leading-[27px] text-black">Vertical Striped Shirt</p>
            <div className="w-[136.11px] md:w-[160.7px] h-[16px] md:h-[19px] absolute top-[1956px] md:top-[2190px] left-[16px] md:left-[100px] flex gap-[11px] md:gap-[13px]">
                <Image src={fivstars} alt="bsstars" className="w-[113.7px] h-[18.49px] flex gap-[5.31px]"></Image>
                <p className="w-[34px] h-[19px] font-normal text-[14px] leading-[18.9px]">5.0/5</p>
            </div>

            <div className="md:hidden flex w-[144px] h-[27px] absolute top-[1976px] left-[16px] gap-[5px]">
                <p className="w-[44px] h-[27px] font-bold text-[20px] leading-[27px] text-black">$212</p>
                <p className="w-[48px] h-[27px] font-bold text-[20px] leading-[27px] line-through text-black text-opacity-40">$235</p>
                <div className="w-[42px] h-[20px] rounded-[62px] mt-[3.5px] flex gap-[12px] bg-[#FF3333] bg-opacity-10 justify-center items-center">
                    <p className="w-[26px] h-[14px] text-[#FF3333] text-[10px] font-medium leading-[13.5px]">-20%</p>
                </div>
            </div>

            <p className="md:block hidden w-[53px] h-[32px] font-bold text-[24px] leading-[32.4px] text-black absolute top-[2217px] left-[100px]">$212</p>
            <p className="md:block hidden line-through text-black text-opacity-40 font-bold text-[24px] leading-[32.4px] w-[56px] h-[32px] absolute  top-[2217px] left-[163px]">$232</p>
            <div className="md:flex hidden w-[58px] h-[28px] rounded-[62px] absolute top-[2219px] left-[231px] py-[6px] px-[14px]  gap-[12px] bg-[#FF3333] bg-opacity-10">
                <p className="w-[31px] h-[16px] text-[#FF3333] text-[12px] font-medium leading-[16.2px]">-20%</p>
            </div>

            <div className="w-[198px] md:w-[295px] h-[200px] md:h-[298px] absolute top-[1720px] md:top-[1841px] left-[230px] md:left-[415px] rounded-[13.42px] md:rounded-[20px]">
                <Image src={orangeshirt} alt="bpent" className=" top-[-51px] left-[14px]"></Image>
            </div>
            <p className="w-[186px] md:w-[226px] h-[22px] md:h-[27px] absolute top-[1930px] md:top-[2155px] left-[230px] md:left-[415px] font-bold text-[16px] md:text-[20px] leading-[21.6px] md:leading-[27px] text-black">Courage Graphic T-shirt</p>
            <div className="w-[116.2px] md:w-[137.9px] h-[16px] md:h-[19px] absolute top-[1956px] md:top-[2190px] left-[230px] md:left-[415px] flex gap-[11px] md:gap-[13px]">
                <Image src={frstars} alt="pstars" className="w-[89.9px] h-[18.49px] flex gap-[5.31px]"></Image>
                <p className="w-[33px] h-[19px] font-normal text-[14px] leading-[18.9px]">4.0/5</p>
            </div>
            <p className="w-[45px] md:w-[54px] h-[27px] md:h-[32px] absolute top-[1976px] md:top-[2217px] left-[230px] md:left-[415px] font-bold text-[20px] md:text-[24px] leading-[27px] md:leading-[32.4px]">$145</p>

            <div className="md:block hidden w-[295px] h-[298px] absolute top-[1841px] left-[730px] rounded-[20px]">
                <Image src={blueshorts} alt="p"></Image>
            </div>
            <p className="md:block hidden w-[239px] h-[27px] absolute top-[2155px] left-[730px] font-bold text-[20px] leading-[27px]">Loose Fit Bermuda Shorts</p>
            <div className="md:flex hidden w-[113.09px] h-[19px] absolute top-[2190px] left-[730px]  gap-[13px]">
                <Image src={tstars} alt="rsstars" className="w-[104px] h-[18.49px]"></Image>
                <p className="w-[33px] h-[19px] font-normal text-[14px] leading-[18.9px]">3.0/5</p>
            </div>
            <p className="md:block hidden w-[47px] h-[32px] absolute top-[2217px] left-[730px] font-bold text-[24px] leading-[32.4px] text-black">$80</p>

            <div className="md:block hidden w-[295px] h-[298px] absolute top-[1841px] left-[1045px] rounded-[20px]">
                <Image src={blackpent} alt="oshirt"></Image>
            </div>
            <p className="md:block hidden w-[199px] h-[27px] absolute top-[2155px] left-[1045px] font-bold text-[20px] leading-[27px]">Faded Skinny Jeans</p>
            <div className="md:flex hidden w-[150px] h-[19px] absolute top-[2190px] left-[1045px]  gap-[13px]">
                <Image src={bsstars} alt="osstars" className="w-[104px] h-[18.49px]"></Image>
                <p className="w-[33px] h-[19px] font-normal text-[14px] leading-[18.9px]">4.5/5</p>
            </div>
            <div className="md:flex hidden w-[55px] h-[32px] absolute top-[2217px] left-[1045px]  gap-[10px]">
                <p className="w-[55px] h-[32px] font-bold text-[24px] leading-[32.4px]">$210</p>
            </div>

            <div className="w-[358px] md:w-[218px] h-[46px] md:h-[52px] absolute top-[2027px] md:top-[2285px] left-[16px] md:left-[611px] rounded-[62px] border-[1px] pt-[16px] pr-[54px] pb-[16px] pl-[54px] flex gap-[12px] border-black border-opacity-10  justify-center items-center">
                <p className="w-[58px] h-[22px] font-medium text-[16px] leading-[21.6px]">View All</p>
            </div>
        </>
    )
}

export default TopSelling