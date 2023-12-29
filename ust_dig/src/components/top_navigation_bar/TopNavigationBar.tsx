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

const topNavigationMenuItems = navigationMenuItemData.map(item =>
    <li><Link id="TopNavigationBarItem" href={item.href}>{item.text}</Link></li>
);

const sideNavigationMenuItems = navigationMenuItemData.map(item =>
    <li><Link id={"SideNavigationBarItem"} href={item.href}>{item.text}</Link></li>

)


function TopNavigationBar() {
    const [menuOpenOrClosed, setMenuOpenOrClosed] = useState(true);

    function showHamburgerMenu() {
        setMenuOpenOrClosed(!menuOpenOrClosed);
    }

    return (
        <>
            <nav>
                <ul id="TopNavigationBar">
                    <MdMenu onClick={() => showHamburgerMenu()} id="HamburgerMenu" className="SmallScreenNavigationMenu" />
                    <li id="Logo" className="TopNaviationBarItem"><Link href="/"><Image src="/images/top_navigation_bar_images/logo.gif" alt={"Logo"} width={100} height={50}></Image></Link></li>
                    <div id="BigScreenNavigationMenu">
                        {topNavigationMenuItems}
                    </div>
                </ul>
            </nav>
            <div style={{'display': ` ${menuOpenOrClosed ? 'none' : ''}`}} id="SideNavigationMenu" className="SmallScreenNavigationMenu">
                {sideNavigationMenuItems}
            </div>

        </>
    );
};

export default TopNavigationBar;
