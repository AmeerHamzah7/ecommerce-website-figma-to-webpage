import Image from "next/image";
import logo from "../../../public/shoplogo.png"
import btn from "../../../public/dropdownbtn.png"
import searchicon from "../../../public/searchicon.png"
import cart from "../../../public/cart.png"
import user from "../../../public/user.png"
import hamburger from "../../../public/hamburger.png"

const Navbar = () => {
    return(
        <>
        <Image src={hamburger} alt="hamburger" className=" w-[24px] h-[24px] absolute top-[54px] left-[16px]  md:hidden"></Image>
        
        <div className="md:w-[1240px] md:h-[48px] absolute top-[54px] left-[61px] md:top-[62px] md:left-[100px] flex gap-[40px] md:items-center justify-center items-center">
            
            <Image src={logo} alt="logo" className="w-[160px] h-[22px]"></Image>

            <div className="w-[321px] h-[22px] gap-[24px] relative hidden md:flex">
                <div className="w-[57px] h-[22px] flex gap-[4px]">
                    <p className="w-[37px] h-[22px] text-[#000000]">Shop</p>
                    <Image src={btn} alt="btn" className="w-[16px] h-[16px] absolute top-[5.25px] left-[40px]"></Image>
                </div>

                <p className="w-[56px] h-[22px]">On Sale</p>
                <p className="w-[89px] h-[22px]">New Arrivals</p>
                <p className="w-[49px] h-[22px]">Brands</p>
            </div>

            <div className="w-[577px] h-[48px] rounded-[62px] py-[12px] px-[16px] md:flex hidden gap-[12px] bg-[#F0F0F0]">
                <div className="w-[24px] h-[24px]">
                    <Image src={searchicon} alt="sicon"></Image>
                </div>

                <p className="w-[151px] h-[22px] text-black opacity-40 leading-[21.6px] text-[16px]">Search for products...</p>
            </div>

            <div className="w-[96px] md:w-[62px] md:h-[24px] h-[24px] flex gap-[14px]">
                <Image src={searchicon} alt="sicon" className="md:hidden"></Image>
                <Image src={cart} alt="cart" className="w-[24px] h-[24px]"></Image>
                <Image src={user} alt="user" className="w-[24px] h-[24px]"></Image>
            </div>
        </div>
        </>
    )
}

export default Navbar;