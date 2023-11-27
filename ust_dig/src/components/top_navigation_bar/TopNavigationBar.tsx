import React from "react";
import './TopNavigationBar.css'

function TopNavigationBar() {
    return (
        <nav>
            <ul id="TopNavigationBar">
                <div id="LeftSideTopNavigationBar">
                    <li>Logo</li>
                </div>
                <div id="RightSideTopNavigationBar">
                    <li><a href="">Mixes</a></li>
                    <li><a href="">Visuals</a></li>
                    <li><a href="">Store</a></li>
                    <li><a href="">About</a></li>
                </div>
            </ul>
        </nav>
    );
};

export default TopNavigationBar;
