import {contactUsInfo} from "@/config/contactUsInfo";
import {isFullStringUrl} from "next/dist/lib/url";

const InfoContactUs=()=>{



    return(
        <section className="w-full flex-center mt-6 sm:mt-[67px]">
            <div className="mainContainer w-full flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-10 ">
                {contactUsInfo.map(item=>(
                    <div key={item.id} className="w-full rounded-2xl py-5 flex flex-col items-center justify-center gap-2 bg-black1 bg-opacity-10 h-[145px] sm:h-[160px]">
                        {item.icon}
                        <p className="text-center text-white font-medium text-base leading-[28px] sm:text-xl">{item.title}</p>
                        <p className="text-center text-white font-normal text-sm sm:text-base leading-[17px]">{item.value}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default InfoContactUs