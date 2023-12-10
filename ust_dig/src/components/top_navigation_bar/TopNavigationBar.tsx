import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import './TopNavigationBar.css'

const hamburger_menu_style = {
    cursor: 'pointer',
    filter: 'brightness(0) invert(1)',
}

//<Image src="/images/top_navigation_bar_images/logo.gif" alt={"Logo"} width={100} height={50}></Image>
function TopNavigationBar() {
    return (
        <nav>
            <ul id="TopNavigationBar">
                <MdMenu className="SmallScreenNavigationMenu"/>
                
                <div id="Logo">
                    <li className="TopNaviationBarItem"><Link href="/"><Image src="/images/top_navigation_bar_images/logo.gif" alt={"Logo"} width={100} height={50}></Image></Link></li>
                </div>

                <Link href="/mixes" className="SmallScreenNavigationMenu TopNaviationBarItem">Mixes</Link>

                <div id="BigScreenNavigationMenu">
                    <li><Link className="TopNavigationBarItem" href="/mixes">Mixes</Link></li>
                    <li><Link className="TopNavigationBarItem" href="/visuals">Visuals</Link></li>
                    <li><Link className="TopNavigationBarItem" href="/store">Store</Link></li>
                    <li><Link className="TopNavigationBarItem" href="/account">Account</Link></li>
                    <li><Link className="TopNavigationBarItem" href="/about">About</Link></li>
                </div>

            </ul>
        </nav>
    );
};

export default TopNavigationBar;
