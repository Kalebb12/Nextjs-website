import Link from "next/link";
import style from "./navLink.module.css"
import { usePathname } from "next/navigation";
const NavLink = ({href , name}) => {
    const path = usePathname()
    return (
        <Link className={`${(path === href) && style.active} ${style.navLink}`} href={href}>{name}</Link>
    );
}
 
export default NavLink;