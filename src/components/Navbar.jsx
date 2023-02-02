import React, { useState } from 'react'
import { Link } from 'react-router-dom';




    

function Navbar() {

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
           <div className="">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <Link to="/" className="logo"><img alt="" src="./sorces/images/logo.png" /></Link>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ">
                     <li className="nav-item active">
                        <Link className="nav-link" to="/" >Home</Link>

                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/cycle"> Cycle</Link>
                     </li>
                     
                     <li className="nav-item">
                        <Link className="nav-link" to="/news">News</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact </Link>
                     </li>
                  </ul>
                  {/* <form className="form-inline my-2 my-lg-0">
                     <div className="login_menu">
                        <ul>
                           <li><Link to="/">Login</Link></li>
                           <li><Link to="shop"><img alt="" src="./sorces/images/trolly-icon.png" /></Link></li>
                           <li><Link to="/"><img alt="" src="./sorces/images/search-icon.png" /></Link></li>
                        </ul>
                     </div>
                     <div></div>
                  </form> */}
                  <form action="">

                     <div className="d-flex ">
                        
                        <div className="px-1 mx-2"><Link to="/" style={{fontSize: "15px" , fontWeight : "bolder"}}>Login</Link></div>

                        {/* <Link to="shop" className="px-1 mx-2"> <i className="fa-solid fa-cart-shopping" ></i> </Link> */}
                        <div className="px-1 mx-2"><Link to="/"><i className="fa-solid fa-cart-shopping" style={{fontSize: "15px"}}></i> </Link></div>

                        <div className="px-1 mx-2"><Link to="/"><i className="fa-solid fa-magnifying-glass" style={{fontSize: "15px"}} ></i> </Link></div>

                     </div>

                  </form>
               </div>
               <div id="main" onClick={handleopenclick}>
                  <span style={{ fontSize: '36px', cursor: 'pointer', color: '#fff' }} onClick={openNav}><img alt="" src="./sorces/images/toggle-icon.png" style={{ height: '30px' }} /></span>
               </div>
            </nav>
           </div>
            <div className="banner_section layout_padding">
               <div id="main_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="container">
                           <div className="row">
                              <div className="col-md-7">
                                 <div className="best_text">Best</div>
                                 <div className="image_1"><img alt='' src="./Sorces/images/img-1.png" /></div>
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
                                 <div className="image_1"><img alt='' src="./Sorces/images/img-1.png" /></div>
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
                                 <div className="image_1"><img alt='' src="./Sorces/images/img-1.png" /></div>
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

         </div>
      
    </>
  )
}

export default Navbar
