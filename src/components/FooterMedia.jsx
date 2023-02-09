import React from 'react'
// import linkedin from '../images/linkedin.png'
// import discord from '../images/discord.png'
// import insta from '../images/instagram.png'
// import mail from "../images/mail.png"

export default function Footer_desc() {
    return (
        <div className="footer_desc_comp">
            {/* <div >
                <ul className="footer_links footer_sites">
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div> */}
            <div>
                <ul className="footer_links">
                    <li><a href="https://www.instagram.com/nexus.pesu/"><img src="assets/images/instagram.png" className="footer_social_icons" alt="socail media" /></a></li>
                    <li><a href="https://www.linkedin.com/company/nexus-pes/"><img src="assets/images/linkedin.png" className="footer_social_icons" alt="socail media" /></a></li>
                    <li><a href="https://discord.gg/RNZw29E6"><img src="assets/images/discord.png" className="footer_social_icons" alt="socail media" /></a></li>
                    <li><a href="mailto:nexus_cse@pes.edu?subject = Feedback&body = Message"><img src="assets/images/mail.png" className="footer_social_icons" alt="socail media" /></a></li>
                </ul>
            </div>
        </div>
    )
}
