import React from "react";
import Image from "next/image";
import Link from "next/link";
import './TopNavigationBar.css'

const hamburger_menu_style = {
    color: 'white',
    border: '1px solid #fff',
    cursor: 'pointer',
  }

function TopNavigationBar() {
    return (
        <nav>
            <ul id="TopNavigationBar">
                <Image id="SmallScreenNavigationMenu" src="/top_navigation_bar_images/hamburger_menu.svg" alt={"Menu"} width={50} height={50} style={hamburger_menu_style}/>
                <div id="Logo">
                    <li><Link href="/">Logo</Link></li>
                </div>
                
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
