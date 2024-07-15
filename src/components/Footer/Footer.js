import React, { useState } from 'react'
import './Footer.css'; // Make sure to import your CSS file
import { paraAdded } from '../Body/BodyMiddle/BodyMiddle';

function Footer() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const showUser = () =>{
            document.getElementById("user").style.display = "initial";
    };

    const goBack = () =>{
        document.getElementById("user").style.display = "none";
        let inputs = document.getElementsByClassName("pick");
        for (const [key, value] of Object.entries(inputs)) {
            value.checked = false;
        }
        document.getElementById("paragraph_block").innerHTML = ""
        while (paraAdded.length > 0) {
            paraAdded.pop()
        }
        localStorage.para = document.getElementById("paragraph_block").innerHTML;
    };

    return (
        <div className='main' id='main'>
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
                        <b>{menuOpen ? 'UKRYJ ˅' : 'POKAŻ ˄'}</b>
                    </button>
                    <div className={`menu ${menuOpen ? 'show' : ''}`} id="smallMenu">
                        <ul>
                            <li onClick={goBack}>˃ Zresetuj ustawienia</li>
                            <li onClick={showUser}>˃ Pokaż Dane Osobowe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
