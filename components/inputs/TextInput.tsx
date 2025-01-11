"use client"

import {Controller} from "react-hook-form";
import {ClassName, FormComponentProps} from "@/types/publicInterface";


interface IProps extends FormComponentProps {
    name: string,
    label?: string,
    placeholder?: string,
    type?: "text" | "email",
    classNames?: {
        classContainer?: ClassName,
        classInput?: ClassName,
        classError?: ClassName,
    }
}

const TextInput = ({name = "", control, errors, placeholder = "", label = "", type = "text", classNames}: IProps) => {
    return (
        <div className={`w-full ${classNames?.classContainer}`}>
            <p className="font-normal text-sm sm:text-base text---black2 mb-3">{label}</p>
            <Controller
                render={({field: {onChange, onBlur, value, name, ref}}) => (
                    <input
                        type={type}
                        placeholder={placeholder}
                        className={`inputClass ${classNames?.classInput}`}
                        value={value}
                        onChange={onChange} // send value to hook form
                        onBlur={onBlur} // notify when input is touched
                    />
                )}
                name={name}
                control={control}
            />
            {errors[name] && <p className={`text-red-700 ${classNames?.classError}`}>{errors[name]?.message}</p>}
        </div>
    )
}
export default TextInput