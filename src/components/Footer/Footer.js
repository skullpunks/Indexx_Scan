import React from "react";
import Instagram from "../../assets/icons/instagram.png";
import Twitter from "../../assets/icons/twitter.png";
import YouTube from "../../assets/icons/youtube.png";
import Reddit from "../../assets/icons/reddit.png";
import IndexWatermark from "../../assets/icons/indexwatermark.png";
import IndexLogo from "../../assets/icons/Indexx.png";
import LocationIcon from "../../assets/icons/location.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import MailIcon from "../../assets/icons/mail.svg";
import "./Footer.css"

const Footer = () => {
    const icons = [
        {
            src: Instagram,
            href: "",
            alt: "Instagram",
        },
        {
            src: Twitter,
            href: "https://twitter.com/IndexxFinance",
            alt: "Twitter",
        },
        {
            src: YouTube,
            href: "",
            alt: "You-tube",
        },
        {
            src: Reddit,
            href: "",
            alt: "Reddit",
        },
    ]

    const coins = [
        {
            title: 'Indexx500',
            itemId: 'https://www.indexx.ai/services',
        },
        {
            title: 'Indexx Crypto',
            itemId: 'https://www.indexx.ai/crypto-50',
        },
        {
            title: 'Indexx Insure',
            itemId: 'https://www.indexx.ai/indexx-insure',
        },
        {
            title: 'Indexx USD+',
            itemId: 'https://www.indexx.ai/indexx-usd',
        },
        {
            title: 'NFTs',
            itemId: 'https://www.indexx.ai/nft',
        },
    ]

    const links = [
        {
            title: 'About Indexx',
            itemId: 'https://www.indexx.ai/about-indexx',
        },
        {
            title: 'How It Works',
            itemId: 'https://www.indexx.ai/team',
        },
        {
            title: 'Transparency',
            itemId: 'https://www.indexx.ai/transparency',
        },
        {
            title: 'PRE-ICO',
            itemId: 'https://www.indexx.ai/pre-ico-indexx500',
        }
    ]

    return (
        <footer className="footer-section">
            <img alt="Logo" className="watermark" src={IndexWatermark}/>
            <div className="container">
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <img src={IndexLogo} className="img-fluid" alt="logo"/>
                                </div>
                                <div className="footer-text">
                                    <p>Indexx stock token is the world first coin
                                        pegged with world largest stock market
                                        index the S&P 500. Pioneered the concept in
                                        the cryptocurrency space.
                                    </p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    {icons.map(icon => (
                                        <a key={icon.itemId} href={icon.href} target="_blank" rel="noopener noreferrer">
                                            <img className="social-connect-icons" src={icon.src} alt={icon.alt}/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Our Coins</h3>
                                </div>
                                <ul>
                                    {coins.map(coin => (
                                        <li><a key={coin.itemId} className="app-links" href={coin.itemId}>{coin.title}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    {links.map(link => (
                                        <li><a key={link.itemId} className="app-links" href={link.itemId}>{link.title}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <img className="cta-icons" src={LocationIcon} alt="location icon"/>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <div>
                                        Indexx Limited, CUB Financial Centre, <br/>
                                        GF6, Lyford Cay, Nassau, Bahamas.
                                    </div>
                                    <br/>
                                    <div>550 Newport Center Drive <br/>
                                        Newport Beach, <br/>
                                        CA 92660 United State <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <img className="cta-icons" src={PhoneIcon} alt="Phone icon"/>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <div>949-228-9079</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <img className="cta-icons" src={MailIcon} alt="MailI icon"/>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <div>bz@azooca.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2022 All Rights Reserved by<a
                                    href="https://www.indexx.ai/">&nbsp;Indexx</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
