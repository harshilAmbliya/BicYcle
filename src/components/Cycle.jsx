import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Cycle() {

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    const [navmode, setnavmode] = useState(false);
    const handleopenclick = () => {
        if (navmode === true) {
            document.getElementById('navbarSupportedContent').classList.add('nav-normal');
            setnavmode(false)
        } else {
            document.getElementById('navbarSupportedContent').classList.remove('nav-normal');
            setnavmode(true)
        }
    }

    return (
        <>
            <div className="header_section header_bg">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="//" className="logo"><img alt='' src="./sorces/images/logo.png" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" >Home</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="cycle">Our Cycle</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <div className="login_menu">
                                <ul>
                                    <li><Link to="/">Login</Link></li>
                                    <li><Link to="shop"><img alt='' src="./sorces/images/trolly-icon.png" /></Link></li>
                                    <li><Link to="/"><img alt='' src="./sorces/images/search-icon.png" /></Link></li>
                                </ul>
                            </div>
                            <div></div>
                        </form>
                    </div>
                    <div id="main" onClick={handleopenclick}>
                        <span style={{ fontSize: '36px', cursor: 'pointer', color: '#fff' }} onClick={openNav}><img alt='' src="./sorces/images/toggle-icon.png" style={{ height: '30px' }} /></span>
                    </div>
                </nav>
                {/* <!-- banner section start --> */}
                <div className="banner_section layout_padding">
                    <div id="main_slider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="best_text">Best</div>
                                            <div className="image_1"><img alt='' src="./sorces/images/img-1.png" /></div>
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="banner_taital">New Model Cycle</h1>
                                            <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content </p>
                                            <div className="contact_bt"><a href="contact.html">Shop Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="best_text">Best</div>
                                            <div className="image_1"><img alt='' src="./sorces/images/img-1.png" /></div>
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="banner_taital">New Model Cycle</h1>
                                            <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content </p>
                                            <div className="contact_bt"><a href="contact.html">Shop Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="best_text">Best</div>
                                            <div className="image_1"><img alt='' src="./sorces/images/img-1.png" /></div>
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="banner_taital">New Model Cycle</h1>
                                            <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content </p>
                                            <div className="contact_bt"><a href="contact.html">Shop Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                            <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                {/* <!-- banner section end --> */}
            </div>
            <div className="cycle_section layout_padding">
                <div className="container">
                    <h1 className="cycle_taital">Our cycle</h1>
                    <p className="cycle_text">It is a long established fact that a reader will be distracted by the </p>
                    <div className="cycle_section_2 layout_padding">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box_main">
                                    <h6 className="number_text">01</h6>
                                    <div className="image_2"><img alt='' src="images/img-2.png" /></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1 className="cycles_text">Cycles</h1>
                                <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <h4 className="price_text">Price <span style={{color: '#f7c17b'}} >$</span> <span style={{color: '#325662'}}>200</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cycle_section_3 layout_padding">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className="cycles_text">Stylis Cycle</h1>
                                <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <h4 className="price_text">Price <span style={{color: '#f7c17b'}}>$</span> <span style={{color: '#325662'}}>200</span></h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box_main_3">
                                    <h6 className="number_text_2">02</h6>
                                    <div className="image_2"><img alt='' src="images/img-3.png" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cycle_section_2 layout_padding">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box_main_3">
                                    <h6 className="number_text_2">03</h6>
                                    <div className="image_2"><img alt='' src="images/img-4.png" /></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1 className="cycles_text">Mordern <br />Cycle</h1>
                                <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <h4 className="price_text">Price <span style={{color:' #f7c17b'}}>$</span> <span style={{color: '#325662'}}>200</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="read_btn_main">
                        <div className="read_bt"><a href="/">Read More</a></div>
                    </div>
                </div>
            </div>
            {/* <!-- cycle section end -->
      <!-- footer section start --> */}
            <div className="footer_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 padding_0">
                            <div className="map_main">
                                <div className="map-responsive">
                                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" title='map' frameBorder="0" style={{border:'0', width: '100%'}} allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="call_text"><a href="/"><img alt='' src="images/map-icon.png" /><span className="padding_left_0">Page when looking at its layou</span></a></div>
                            <div className="call_text"><a href="/"><img alt='' src="images/call-icon.png" /><span className="padding_left_0">Call Now  +01 123467890</span></a></div>
                            <div className="call_text"><a href="/"><img alt='' src="images/mail-icon.png" /><span className="padding_left_0">demo@gmail.com</span></a></div>
                            <div className="social_icon">
                                <ul>
                                    <li><a href="/"><img alt='' src="images/fb-icon1.png" /></a></li>
                                    <li><a href="/"><img alt='' src="images/twitter-icon.png" /></a></li>
                                    <li><a href="/"><img alt='' src="images/linkedin-icon.png" /></a></li>
                                    <li><a href="/"><img alt='' src="images/instagram-icon.png" /></a></li>
                                </ul>
                            </div>
                            <input type="text" className="email_text" placeholder="Enter Your Email" name="Enter Your Email" />
                            <div className="subscribe_bt"><a href="/">Subscribe</a></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- footer section end -->
      <!-- copyright section start --> */}
            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">Copyright 2019 All Right Reserved By.<a href="https://html.design"> Free  html Templates </a></p>
                </div>
            </div>
        </>
    )
}

export default Cycle
