import Image from "next/image"
import Cross from "../../../public/cross.png"

const Topstrip = () => {
    return (
        <div className="w-[390px] md:w-[1440px] md:h-[38px] h-[34px] bg-black relative flex justify-center items-center">
            <div className="md:w-[20px] md:h-[20px] absolute top-[9px] left-[1320px] md:block hidden">
                <Image src={Cross} alt="crossVec" className="w-[13.13px] h-[13.13px] absolute top-[3.43px] left-[3.44px]"></Image>
            </div>

            <p className="w-[301px] md:w-[401px] h-[16px] md:h-[19px] md:absolute md:top-[9px] md:left-[544px] text-[#FFFFFF] md:text-[14px] text-[11px] ">Sign up and get 20% off to your first order. <span className="font-medium md:text-[14px] text-[12px] leading-[18.9px] decoration-solid underline pl-1">Sign Up Now</span></p>
        </div>
    )
}

export default Topstrip;