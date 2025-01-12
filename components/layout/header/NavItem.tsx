"use client"

import Link from "next/link";
import {IMenu} from "@/types/publicInterface";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";


const NavItem=({menu}:{menu:IMenu})=>{

    const pathname = usePathname()
    const [isCurrent,setIsCurrent] =useState<boolean>(false)

    useEffect(()=>{

        setIsCurrent(menu.path === pathname)
    },[pathname])
    return(
        <Link
            className={`text-base font-normal text-gray1 hover:text-brand transition-all duration-300 ${ menu.path == pathname ? "!text-brand ":"" }`}
            key={menu.id} href={menu.path}>{menu.label}</Link>
    )
}
export default NavItem