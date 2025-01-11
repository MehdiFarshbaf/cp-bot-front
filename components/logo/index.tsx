import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.svg"

const Logo=()=>{
    return(
        <Link href="/">
            <Image src={logo} alt="logo"/>
        </Link>
    )
}
export default Logo