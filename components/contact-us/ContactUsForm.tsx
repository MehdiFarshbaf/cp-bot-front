"use client"

import * as Yup from "yup"
import { useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import TextInput from "@/components/inputs/TextInput";
import TextAreaInput from "@/components/inputs/TextAreaInput";
import Image from "next/image";
import imgBlur from "@/assets/images/blur.png";


const ContactUsForm=()=>{
    const schema = Yup.object().shape({
        fullName: Yup.string().required(("نام و نام خانوادگی الزامی است.")).min(3,"حداقل سه کاراکتر"),
        subject: Yup.string().required(("عنوان الزامی است.")),
        message: Yup.string().required(("پیغام الزامی است.")),
        email: Yup.string().email("ایمیل وارد شده معتبر نمی باشد.").required(("ایمیل الزامی است.")),
    });
    const {handleSubmit, control, formState: {errors}, getValues, setValue, reset} = useForm<any>({
        resolver: yupResolver(schema),
        defaultValues: {}
    })
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return(
        <section className="relative w-full flex-center flex-col bg-white rounded-tl-[32px] rounded-tr-[32px] sm:rounded-tl-[40px] sm:rounded-tr-[40px] mt-[49px] sm:mt-[54px]">
            <Image src={imgBlur} alt="" className="absolute -z-10 -top-[237px]"  />

            <div className="mainContainer w-full pt-[38px] sm:pt-[46px] flex flex-col justify-center items-center">
                <button className="btn-primary text-center mb-2 sm:mb-4">تماس با ما</button>
                <p className="text-center mb-2 sm:mb-[18px] text-xl font-semibold sm:text-2xl text-black2">ارتباط با مجموعه سی پی بات</p>
                <p className="text-center text-gray2 font-normal text-sm mb-6 sm:mb-10">از اینکه با ما در ارتباط هستید سپاسگزاریم. برای ارسال پیام، لطفاً از فرم زیر استفاده کنید.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center gap-6">
                    <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-6">
                        <TextInput name="fullName" control={control} errors={errors} placeholder="نام و نام خوانوادگی"/>
                        <TextInput name="email" control={control} type="email" errors={errors} placeholder="ایمیل"/>
                    </div>
                    <TextInput name="subject" control={control}  errors={errors} placeholder="موضوع"/>
                    <TextAreaInput label="پیام شما" name="message" control={control}  errors={errors} placeholder="پیام خود را بنویسید..."/>
                    <div className="w-full mb-[50px] sm:mb-[100px] flex justify-end">
                        <button className="btn-primary h-12 sm:h-[58px] w-full sm:w-[213px]">ارسال پیام</button>
                    </div>

                </form>
            </div>
        </section>
    )
}
export default ContactUsForm