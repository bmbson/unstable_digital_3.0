import React from "react";
import Link from "next/link";
import './TopNavigationBar.css'

function TopNavigationBar() {
    return (
        <nav>
            <ul id="TopNavigationBar">
                <div id="LeftSideTopNavigationBar">
                    <li><Link href="/">Logo</Link></li>
                </div>
                <div id="RightSideTopNavigationBar">
                    <li><Link href="/mixes">Mixes</Link></li>
                    <li><Link href="/visuals">Visuals</Link></li>
                    <li><Link href="/store">Store</Link></li>
                    <li><Link href="/about">About</Link></li>
                </div>
            </ul>
        </nav>
    );
};

export default TopNavigationBar;
