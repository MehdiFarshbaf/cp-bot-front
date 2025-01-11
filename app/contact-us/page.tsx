import InfoContactUs from "@/components/contact-us/InfoContactUs";
import ContactUsForm from "@/components/contact-us/ContactUsForm";

import imgBlur from "@/assets/images/blur.png"
import Image from "next/image";
export default function ContactUs() {
    return (
        <main className="w-full flex justify-center items-center flex-col ">
            {/*<Image src={imgBlur} alt="" className="absolute -z-10 top-[237px]"  />*/}
            <div className="mainContainer">
                <h1 className="title-page">با ما در ارتباط باشید تا <span className="font-bold text-2xl sm:text-[35px]">بهترین تجربه</span> را
                    برای شما فراهم کنیم !</h1>
                <InfoContactUs/>
            </div>
            <ContactUsForm/>
        </main>
    );
}
