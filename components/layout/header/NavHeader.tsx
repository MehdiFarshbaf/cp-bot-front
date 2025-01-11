"use client"

import {menuList} from "@/config/appConfig";
import Link from "next/link";
import { usePathname } from 'next/navigation'
const NavHeader = () => {
    const pathname = usePathname()
    return (
        <nav className="hidden sm:flex items-center gap-6">
            {menuList.map(menu => (
                <Link
                    className={`text-base font-normal text-gray1 hover:text-brand transition-all duration-300 ${menu.path == pathname ? "text-brand" : ""}`}
                    key={menu.id} href={menu.path}>{menu.label}</Link>
            ))}
        </nav>
    )
}
export default NavHeader