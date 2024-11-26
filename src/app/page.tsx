import Topstrip from "./components/topStrip"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Partners from "./components/partners"
import NewArrivals from "./components/newArrivals"
import LineBreak from "./components/linebreak"
import TopSelling from "./components/topselling"
import DressStyles from "./components/styles"
import Customers from "./components/customers"
import Footer from "./components/footerNnewsletter"

const Homepage = () => {
    return (
        <div className="w-[390px] h-[4461px] md:w-[1440px] md:h-[4370px] bg-[#FFFFFF] ">
            <Topstrip/>
            <Navbar/>
            <Hero/>
            <Partners/>
            <NewArrivals/>
            <LineBreak/>
            <TopSelling/>
            <DressStyles/>
            <Customers/>
            <Footer/>
        </div>
    )
}

export default Homepage;