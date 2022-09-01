import React from "react";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-flex">
                    <div className="col-xs-6 col-md-4 footercentre">
                        <a href="/" id="1067941554">
                            <img src="https://lirp.cdn-website.com/5afbaf73/dms3rep/multi/opt/index-38-238w.png"
                                 width="50%" height="22%" alt=""/>
                        </a>
                        <br/><br/><br/>
                        <p>
                            Indexx stock token is the world first coin <br/>
                            pegged with world largest stock market <br/>
                            index the S&P 500. Pioneered the concept in <br/>
                            the cryptocurrency space.
                        </p>
                    </div>
                    <div className="col-xs-6 col-md-4 footercentre2">
                        <h6>
                            Indexx
                        </h6>
                        <p>
                            949-228-9079
                            <br/> <br/> <br/>

                            indexx Limited, CUB Financial Centre,<br/>
                            GF6, Lyford Cay, Nassau, Bahamas.<br/> <br/> <br/>

                            550 Newport Center Drive<br/>
                            Newport Beach,<br/>
                            CA 92660 United State<br/>
                            <br/>
                        </p>
                        <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by &nbsp;
                            <a href="https://www.indexx.ai/">Indexx</a>.
                        </p>
                        <br/>

                        <div className="social-wrapper">
                            <ul>
                                <li>
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"
                                             alt="Twitter Logo" className="twitter-icon"/></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="http://www.iconarchive.com/download/i54037/danleech/simple/facebook.ico"
                                            alt="Facebook Logo" className="facebook-icon"/></a>
                                </li>
                                <li>
                                    <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="http://icons.iconarchive.com/icons/marcus-roberto/google-play/256/Google-plus-icon.png"
                                            alt="Googleplus Logo" className="googleplus-icon"/></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <img src="https://www.mchenryvillage.com/images/instagram-icon.png"
                                             alt="Youtube Logo" className="youtube-icon"/></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-4 footercentre2">
                        <h6>Links</h6>

                        <Navigation
                            activeItemId="/management/members"
                            onSelect={({itemId}) => {
                                if (itemId !== "1" && itemId !== "2") {
                                    window.location.href = itemId;
                                }
                            }}
                            items={[

                                {
                                    title: 'Indexx Tokens',
                                    itemId: '1',
                                    subNav: [
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
                                    ],
                                },
                                {
                                    title: 'About',
                                    itemId: '2',
                                    subNav: [
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
                                        }
                                    ],
                                },
                                {
                                    title: 'PRE-ICO',
                                    itemId: 'https://www.indexx.ai/pre-ico-indexx500',

                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
