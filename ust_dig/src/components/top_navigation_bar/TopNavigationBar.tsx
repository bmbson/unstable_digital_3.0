import React from "react";
import Image from "next/image";
import Link from "next/link";
import './TopNavigationBar.css'

const hamburger_menu_style = {
    cursor: 'pointer',
    filter: 'brightness(0) invert(1)',
}

function TopNavigationBar() {
    return (
        <nav>
            <ul id="TopNavigationBar">
                <Image className="SmallScreenNavigationMenu" src="/images/top_navigation_bar_images/hamburger_menu.svg" alt={"Menu"} width={50} height={50} style={hamburger_menu_style} />
                <div id="Logo">
                    <li><Link href="/">Logo</Link></li>
                </div>

                <Link href="/account" className="SmallScreenNavigationMenu">Account</Link>

                <div id="BigScreenNavigationMenu">
                    <li><Link href="/mixes">Mixes</Link></li>
                    <li><Link href="/visuals">Visuals</Link></li>
                    <li><Link href="/store">Store</Link></li>
                    <li><Link href="/account">Account</Link></li>
                    <li><Link href="/about">About</Link></li>
                </div>

            </ul>
        </nav>
    );
};

export default TopNavigationBar;
