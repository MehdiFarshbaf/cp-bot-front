import {HTMLProps} from "react";

export type ClassName = HTMLProps<HTMLElement>["className"]

export interface IMenu {
    id: number,
    label: string,
    path: string
}

export interface ResponseApi {
    success: boolean,
    message: string
}

export interface ID {
    _id: string
}

export interface IFormComponentProps {
    control?: any
    errors?: any,
    setValue?: Function,
    getValues?: any
}

export interface IClassName {
    className: HTMLProps<HTMLElement>["className"]
}

export interface FormComponentProps {
    control?: any
    errors?: any,
    setValue?: Function,
    getValues?: any
}

export type OptionSelect = { value: string, label: string }