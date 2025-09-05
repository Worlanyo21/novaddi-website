import Hero from "@/components/Hero";
import WhatWeDo from "@/components/whatwedo";
import WhyChooseNovaddi from "@/components/whychoosenovaddi";
import HowItWorks from "@/components/howitworks";
import Testimonials from "@/components/Testimonials";
import DownloadApp from "@/components/downloadApp";

export default function Home() {
  return (
    <div className="">
     {/* <Navigation/> */}
     <Hero/>
     <WhatWeDo/>
     <HowItWorks/>
     <div className="bg-teal-950/30">
     <WhyChooseNovaddi/>
     </div>
     <DownloadApp/>
     <Testimonials/>
     {/* <Footer/> */}
    </div>
  );
}
