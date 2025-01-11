import InfoContactUs from "@/components/contact-us/InfoContactUs";

export default function ContactUs() {
    return (
        <main className="w-full flex justify-center items-center flex-col">
            <div className="mainContainer">
                <h1 className="title-page">با ما در ارتباط باشید تا <span className="font-bold text-2xl sm:text-[35px]">بهترین تجربه</span> را
                    برای شما فراهم کنیم !</h1>
                <InfoContactUs/>
            </div>
        </main>
    );
}
