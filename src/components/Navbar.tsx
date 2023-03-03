import Image from "next/image";
import logo from '../../assets/img/logo.svg';
import {menu} from "@/types/menu";
import React from "react";
import styles from '@/styles/Header.module.scss';
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Link href='/'><Image src={logo} alt="logo"/></Link>
                <nav>
                    <ul className={styles.nav}>
                        {menu.map((item, idx) => (
                            <li className={styles.nav_item} key={`menu item ${idx}`}>
                                <Link href={item.link} className={styles.nav_link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/*<div className={styles.user}><Link href="/src/pages/"></Link></div>*/}
                <div className={styles.favorites}>
                    {/*<span className="favorites-count">2</span>*/}
                </div>
                <div className={styles.cart}>
                    {/*<span className="cart-count">1</span>*/}
                </div>
            </header>
        </div>
    )
}