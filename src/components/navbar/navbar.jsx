import Links from "./links/links";
import style from "./navbar.module.css"
const Navbar = () => {
    return (
        <nav className={style.container}>
            <div className={style.logo}>Logo</div>
            <div>
               <Links/>
            </div>
        </nav>
    );
}
 
export default Navbar;