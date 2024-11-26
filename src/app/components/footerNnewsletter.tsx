import Image from "next/image"
import email from "../../../public/email.png"
import x from "../../../public/x.png"
import insta from "../../../public/insta.png"
import fb from "../../../public/fb.png"
import git from "../../../public/git.png"
import visa from "../../../public/visa.png"
import master from "../../../public/master.png"
import paypal from "../../../public/paypal.png"
import apay from "../../../public/apay.png"
import gpay from "../../../public/gpay.png"

const Footer = () => {
    return(
    <div>
    <div className="w-[1441px] h-[589px] top-[3781px] left-[-1px] border-black border-opacity-10 ">
            
            <div className="w-[392px] md:w-[1441px] h-[1060px] md:h-[499px] absolute top-[3615px] md:top-[3871px] left-[-1px] bg-[#F0F0F0]"></div>

            <div className="w-[1240px] h-[177px] absolute top-[3850px] left-[16px] md:top-[4011px] md:left-[100px] justify-between flex">
                <div className="w-[248px] h-[177px] flex gap-[35px]">
                    <div className="w-[248px] h-[114px] flex flex-col gap-[25px]">
                        <p className="w-[144px] md:w-[167px] h-[20px] md:h-[23px] font-bold text-[28.85px] md:text-[33.45px] leading-[40.15px] font-integralBold">SHOP.CO</p>

                        <p className="w-[357px] md:w-[248px] h-[40px] md:h-[66px] font-normal text-[14px] leading-[22px] text-black text-opacity-60">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    </div>

                    <div className="flex w-[148px] h-[28px] white absolute top-[-35px] md:top-0">
                        <Image src={x} alt="x"  className="absolute top-[149px] left-[0] w-[28px] h-[28px]"></Image>
                        <Image src={fb} alt="fb" className="absolute top-[149px] left-[40px] w-[28px] h-[28px]"></Image>
                        <Image src={insta} alt="insta" className="absolute top-[149px] left-[80px] w-[28px] h-[28px]"></Image>
                        <Image src={git} alt="git" className="absolute top-[149px] left-[120px] w-[28px] h-[28px]"></Image>
                    </div>
            </div>

                <div className="w-[104px] h-[177px] flex flex-col gap-[26px] md:relative absolute top-[190px] md:top-0 left-[16px] md:left-0">
                    <p className="w-[98px] h-[18px] font-bold text-[16px] leading-[18px] tracking-[3px]">COMPANY</p>
                    <div className="w-[104px] h-[133px] font-normal text-[16px] leading-[19px] text-black text-opacity-60"><p>About</p><br /> <p>Features</p><br /> <p>Features</p><br /> <p>Career</p></div>
                </div>

                <div className="w-[104px] h-[177px] flex flex-col gap-[26px] md:relative absolute top-[190px] md:top-0 left-[196px] md:left-0">
                    <p className="w-[98px] h-[18px] font-bold text-[16px] leading-[18px] tracking-[3px] uppercase">Help</p>
                    <div className="w-[136px] h-[133px] font-normal text-[16px] leading-[19px] text-black text-opacity-60"><p>Customer Support</p><br /> <p>Delivery Details</p><br /> <p>Terms & Conditions</p><br /> <p>Privacy Policy</p></div>
                </div>

                <div className="w-[104px] h-[177px] flex flex-col gap-[26px] md:relative absolute top-[420px] md:top-0 left-[16px] md:left-0">
                    <p className="w-[98px] h-[18px] font-bold text-[16px] leading-[18px] tracking-[3px]">FAQ</p>
                    <div className="w-[104px] h-[133px] font-normal text-[16px] leading-[19px] text-black text-opacity-60"><p>Account</p><br /> <p>Manage Deliveries</p><br /> <p>Orders</p><br /> <p>Payments</p></div>
                </div>

                <div className="w-[104px] h-[177px] flex flex-col gap-[26px] md:relative absolute top-[420px] md:top-0 left-[196px] md:left-0">
                    <p className="w-[98px] h-[18px] font-bold text-[16px] leading-[18px] tracking-[3px]">RESOURCES</p>
                    <div className="w-[149px] h-[133px] font-normal text-[16px] leading-[19px] text-black text-opacity-60"><p>Free eBooks</p><br /> <p>Development Tutorial</p><br /> <p>How to - Blog</p><br /> <p>Youtube Playlist</p></div>
                </div>
            </div>

        <div className="w-[358px] md:w-[1240px] h-[310px] md:h-[180px] flex absolute top-[3480px] md:top-[3781px] left-[16px] md:left-[100px] rounded-[20px] justify-between py-[36px] px-[64px] bg-black">
                <p className="uppercase w-[297px] md:w-[551px] h-[105px] md:h-[94px] font-bold text-[32px] md:text-[40px] leading-[35px] md:leading-[45px] text-white font-integralBold absolute top-[32px] left-[24px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>

                <div className="w-[349px] h-[108px] flex flex-col absolute md:left-[800px] md:top-8 top-[180px] right-[-12px] md:right-0 gap-[14px]">
                    <div className="w-[311px] md:w-[349px] h-[42px] md:h-[48px] rounded-[62px] py-[12px] px-[16px] flex gap-[12px] bg-white">
                        <Image src={email} alt="email"></Image>
                        <p className="w-[151px] md:w-[173px] h-[19px] md:h-[22px] font-normal text-[14px] md:text-[16px] leading-[18.9px] md:leading-[21.6px] text-black text-opacity-40">Enter your email address</p>
                    </div>

                    <div className="w-[311px] md:w-[349px] h-[42px] md:h-[48px] rounded-[62px] py-[12px] px-[16px] flex gap-[12px] bg-white justify-center items-center">
                        <p className="w-[150px] md:w-[172px] h-[19px] md:h-[22px] font-medium text-[14px] md:text-[16px] leading-[18.9px] md:leading-[21.6px] text-black">Subscribe to Newsletter</p>
                    </div>
                </div>
        </div>
    </div>
    <div className="w-[358px] md:w-[1240px] absolute top-[4495px] md:top-[4290px] left-[9px] md:left-[100px] border-[1px] rotate-0 bg-black bg-opacity-10 items-center"></div>
    <div className="absolute top-[50px]">
    <p className="w-[269px] md:w-[392px]  h-[19px] absolute top-[4465px] md:top-[4263px] left-[55px] md:left-[100px] font-normal leading-[18.9px] text-black text-opacity-60 text-[14px]">Shop.co © 2000-2023, All Rights Reserved</p>

        <div className="w-[340px] h-[41px] absolute top-[4510px] md:top-[4258px] left-[28px] md:left-[1000px] flex gap-[12px]">
        <Image src={visa} alt="v"></Image>
        <Image src={master} alt="master"></Image>
        <Image src={paypal} alt="paypal"></Image>
        <Image src={apay} alt="a"></Image>
        <Image src={gpay} alt="gpay"></Image>
    </div>
   </div>
   </div>
    )
}

export default Footer