import React  from 'react'


function Cycle() {

   

    return (
        <>
        
            <div className="cycle_section layout_padding">
                <div className="container">
                    <h1 className="cycle_taital">Our cycle</h1>
                    <p className="cycle_text">It is a long established fact that a reader will be distracted by the </p>
                    <div className="cycle_section_2 layout_padding">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box_main">
                                    <h6 className="number_text">01</h6>
                                    <div className="image_2">
                                        <img src="./Sorces/images/img-2.png" alt="" />
                                    </div>
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
                                    <div className="image_2"><img alt='' src="./Sorces/images/img-3.png" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cycle_section_2 layout_padding">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box_main_3">
                                    <h6 className="number_text_2">03</h6>
                                    <div className="image_2"><img alt='' src="./Sorces/images/img-4.png" /></div>
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
         
     
        </>
    )
}

export default Cycle
