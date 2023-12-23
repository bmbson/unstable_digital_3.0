'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import './TopNavigationBar.css'


const navigationMenuItemData = [
    { key: 0, href: '/mixes', text: 'Mixes' },
    { key: 1, href: '/visuals', text: 'Visuals' },
    { key: 2, href: '/store', text: 'Store' },
    { key: 3, href: '/account', text: 'Account' },
    { key: 4, href: '/about', text: 'About' },
]

const navigationMenuItems = navigationMenuItemData.map(item =>
    <li><Link className="TopNavigationBarItem" href={item.href}>{item.text}</Link></li>
);


function TopNavigationBar() {
    const [menuOpenOrClosed, setMenuOpenOrClosed] = useState(false);

    function showHamburgerMenu() {
        setMenuOpenOrClosed(!menuOpenOrClosed);
        alert(navigationMenuItems);
    }

    return (
        <nav>
            <ul id="TopNavigationBar">
                <MdMenu onClick={() => showHamburgerMenu()} id="HamburgerMenu" className="SmallScreenNavigationMenu" />

                <div id="Logo">
                    <li className="TopNaviationBarItem"><Link href="/"><Image src="/images/top_navigation_bar_images/logo.gif" alt={"Logo"} width={100} height={50}></Image></Link></li>
                </div>

                <div id="BigScreenNavigationMenu">
                    {navigationMenuItems}
                </div>

            </ul>
        </nav>
    );
};

export default TopNavigationBar;
