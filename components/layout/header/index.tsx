import ProfileIcon from "@/components/icons/ProfileIcon";
import Logo from "@/components/logo";
import BurgerMenuIcon from "@/components/icons/BurgerMenuIcon";
import NavHeader from "@/components/layout/header/NavHeader";


const Header = () => {

    return (
        <header className="sticky top-[49px] w-full flex-center">
            <div className="mainContainer w-full flex-center">
                <div
                    className="max-w-[724px]  w-full rounded-[74px] py-[14px] px-5 flex justify-between items-center bg-black1 ">
                    <button className="sm:hidden btn-rounded"><BurgerMenuIcon/></button>
                    <div className="flex items-center gap-[22px]">
                        <Logo/>
                        <NavHeader/>
                    </div>
                    <button className="hidden sm:flex btn-primary flex-center text-nowrap gap-2"><ProfileIcon/>حساب
                        کاربری
                    </button>
                    <button className="sm:hidden btn-rounded"><ProfileIcon/></button>
                </div>
            </div>

        </header>
    )
}
export default Header