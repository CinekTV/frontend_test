import './Footer.css';
import React from 'react';

function Footer() {
    return (
        <div className='main'>
            <div className='itemLeft'>
                <div className='itemLeftIn'>
                    <span>CSS</span><br />
                    <span>IS</span><br />
                    <span>AWESOME</span>
                </div>
            </div>
            <div className='itemMiddle'>
                ⎯⎯⎯⎯nabthat⎯⎯⎯⎯
            </div>
            <div className='itemRight'>
                <div className="dropup">
                    <button className="dropbtn" id="toggleMenuButton">
                        <b>POKAŻ&nbsp; ˄</b>
                    </button>
                    <div className='menu' id="smallMenu">
                        <ul>
                            <li>Menu Item 1</li>
                            <li>Menu Item 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
