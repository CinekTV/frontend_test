import React, { useState } from 'react';
import './Footer.css'; // Make sure to import your CSS file

function Footer() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
                    <button className="dropbtn" id="toggleMenuButton" onClick={toggleMenu}>
                        <b>{menuOpen ? 'UKRYJ ˄' : 'POKAŻ ˄'}</b>
                    </button>
                    <div className={`menu ${menuOpen ? 'show' : ''}`} id="smallMenu">
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
