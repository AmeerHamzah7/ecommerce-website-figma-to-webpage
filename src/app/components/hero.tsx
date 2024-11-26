import Image from "next/image"
import Heroimg from "../../../public/hero.png"
import Star from "../../../public/star.png"
import heromobimg from "../../../public/heromobimg.png"

const Hero = () => {
    return (
        <>
            <Image alt="heroimg" src={Heroimg} className="w-[1440px] h-[663px] relative top-[70px] md:top-[100px] hidden md:block"></Image>
            <div className="w-[390px] h-[853px] absolute top-[98px] md:hidden bg-[#F2F0F1]"></div>
            <p className="w-[315px] h-[93px] md:w-[577px] md:h-[173px] absolute top-[138px] md:top-[237px] left-[16px] md:left-[100px] leading-[34px] md:leading-[64px] text-[36px] md:text-[64px] text-[#000000] font-integralBold">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
            <p className="w-[358px] md:w-[545px] h-[50px] md:h-[33px] absolute top-[251px] md:top-[442px] left-[16px] md:left-[100px] leading-[20px] md:leading-[22px] text-black text-opacity-60 font-SatoshiRegular text-[14px] md:text-[16px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <div className="w-[358px] md:w-[210px] h-[52px] absolute top-[325px] md:top-[507px] left-[16px] md:left-[100px] rounded-[62px] py-[16px] px-[54px] flex justify-center items-center gap-[12px] bg-black">
                <p className="w-[75px] h-[22px] text-[16px] md:text-[15px] leading-[21.6px] font-medium text-white text-center">Shop Now</p>
            </div>

            <div className="w-[596px] h-[74px] absolute top-[607px] left-[100px] hidden md:flex gap-[32px]">
                <div className="w-[141px] h-[74px]">
                    <p className="w-[107px] h-[54px] font-bold text-black text-[40px] leading-[54px]">200+</p>
                    <p className="w-[141px] h-[22px] font-normal text-[16px] leading-[22px] text-black text-opacity-60">International Brands</p>
                </div>
            
                
                <div className="w-[74px] border bg-black bg-opacity-10"></div>

                <div className="w-[156px] h-[74px]">
                    <p className="w-[146px] h-[54px] font-bold leading-[54px] text-[40px] text-black">2,000+</p>
                    <p className="w-[156px] h-[22px] font-normal text-[16px] leading-[22px] text-black text-opacity-60">High-Quality Products</p>
                </div>

                <div className="w-[74px] border bg-black bg-opacity-10"></div>

                <div className="w-[171px] h-[74px]">
                    <p className="w-[171px] h-[54px] font-bold text-[40px] leading-[54px] text-black">30,000+</p>
                    <p className="w-[126px] h-[22px] font-normal leading-[22px] text-[16px] text-black text-opacity-60">Happy Customers</p>
                </div>

            </div>

            <div className="w-[278px] h-[52px] absolute top-[397px] left-[56px] justify-between items-center md:hidden flex">
                <div className="w-[106px] h-[48px]">
                    <p className="w-[64px] h-[32px] font-bold text-black text-[24px] leading-[32.4px]">200+</p>
                    <p className="w-[106px] h-[22px] font-normal text-[12px] leading-[22px] text-black text-opacity-60">International Brands</p>
                </div>
            
                
                <div className="w-[52px] border bg-black bg-opacity-10 -rotate-90"></div>

                <div className="w-[117px] h-[48px]">
                    <p className="w-[88px] h-[32px] font-bold leading-[32.4px] text-[24px] text-black">2,000+</p>
                    <p className="w-[117px] h-[22px] font-normal text-[12px] leading-[22px] text-black text-opacity-60">High-Quality Products</p>
                </div>
            </div>

            <div className="w-[103px] h-[48px] absolute top-[461px] left-[144px] md:hidden block">
                <p className="w-[103px] h-[32px] text-[24px] font-bold leading-[32.4px]">30,000+</p>
                <p className="w-[95px] h-[22px] text-[12px] leading-[22px] font-normal text-black text-opacity-60">Happy Customers</p>
            </div>

            <Image src={heromobimg} alt="heromobimg" className="w-[390px] h-[448px] relative top-[503px] md:hidden block"></Image>
            
            <Image src={Star} alt="star" className="w-[56px] h-[56px] absolute top-[431px] left-[750px] hidden md:block"></Image>
            <Image src={Star} alt="star" className="w-[104px] h-[104px] absolute top-[220px] left-[1255px] hidden md:block"></Image>
        </>
    )
}

export default Hero