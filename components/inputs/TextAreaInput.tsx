"use client"

import {Controller} from "react-hook-form";
import {ClassName, FormComponentProps} from "@/types/publicInterface";


interface IProps extends FormComponentProps {
    name: string,
    label?: string,
    placeholder?: string,
    classNames?: {
        classContainer?: ClassName,
        classInput?: ClassName,
        classError?: ClassName,
    }
}

const TextAreaInput = ({name = "", control, errors, placeholder = "", label = "",  classNames}: IProps) => {
    return (
        <div className={`w-full ${classNames?.classContainer}`}>
            <p className="font-normal text-sm sm:text-base text---black2 mb-3">{label}</p>
            <Controller
                render={({field: {onChange, onBlur, value, name, ref}}) => (
                    <textarea
                        placeholder={placeholder}
                        className={`w-full inputClass h-[200px] resize-none ${classNames?.classInput}`}
                        value={value}
                        onChange={onChange} // send value to hook form
                        rows={10}
                    />
                )}
                name={name}
                control={control}
            />
            {errors[name] && <p className={`text-red-700 ${classNames?.classError}`}>{errors[name]?.message}</p>}
        </div>
    )
}
export default TextAreaInput