"use client";
import Link from "next/link";
import style from "./links.module.css";
import { usePathname } from "next/navigation";
import NavLink from "./navLink/navLink";
import { useState } from "react";
const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "blogs", href: "/blog" },
  ];

  const session = true;
  const isAdmin = true;
  return (
    <div className={style.container}>
      <div className={style.links}>
        {links.map((link, index) => (
          <NavLink key={index} href={link.href} name={link.name} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink href="/admin" name="Admin" />}
            <button className={style.logout}>Logout</button>
          </>
        ) : (
          <NavLink href="/login" name="login" />
        )}
      </div>
      <button onClick={()=>setOpen(!open)}>Menu</button>
      {open && (
        <div className={style.mobileLinks}>
          {links.map((link, index) => (
            <NavLink key={index} href={link.href} name={link.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
