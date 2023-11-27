import React from "react";
import './TopNavigationBar.css'

function TopNavigationBar() {
    return (
        <nav>
            <ul id="TopNavigationBar">
                <div className="LeftSideTopNavigationBar">
                    <li>Logo</li>
                </div>
                <div className="RightSideTopNavigationBar">
                    <li>Mixes</li>
                    <li>Visuals</li>
                    <li>Store</li>
                    <li>About</li>
                </div>
            </ul>
        </nav>
    );
};

export default TopNavigationBar;
