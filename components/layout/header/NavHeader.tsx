
import {menuList} from "@/config/appConfig";
import NavItem from "@/components/layout/header/NavItem";
const NavHeader = () => {

    return (
        <nav className="hidden sm:flex items-center gap-6">
            {menuList.map(menu => (
               <NavItem key={menu.id} menu={menu}/>
            ))}
        </nav>
    )
}
export default NavHeader