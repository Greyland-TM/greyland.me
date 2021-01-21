import React from 'react'

const Footer = () => (
    <div className="footer">
        <div className="footer__pageselect">
            <ul className='footer__pageselect--list'>
                <li className="footer__pageselect--item">Home</li>
                <li className="footer__pageselect--item">Skills</li>
                <li className="footer__pageselect--item">About me</li>
                <li className="footer__pageselect--item">Projects</li>
                <li className="footer__pageselect--item">Contact</li>
            </ul>
        </div>
        <div className="footer__copyright">
            <p className='footer__copyright--text'>&copy; This page was designed and developed entirely by Greyland Miller. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;