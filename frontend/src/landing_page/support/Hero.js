import React from "react";
function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className=" p-5 " id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="#">Track Ticket</a>
            </div>
            <div className="row p-5 m-3 " >
                          <div className="col-6 p-5 " >
                            <h1 className="fs-3">Search for an answer or browser help topics to create a ticket</h1>
                            <input placeholder="Eg. how do I activate F&O"/>
                            <br></br>
                         <a href="#">Track account apening</a>
                         <a href="#">Track segment activation</a>
                         <a href="#">Intrady margins</a>
                         <a href="#">Kite user manual</a>
                          </div>
                          <div className="col-6 p-5 " >
                            <h1 className="fs-3 " style={{marginLeft:"15px"}}>Featured</h1>
                            <ol>
                                <li><a href="#">Current Takeover and Delisting - January 2024</a></li>
                                <li> <a href="#">Latest Intrady leverages -MIS & CO</a></li>
                            </ol>

                          
                          </div>
                
            </div>
        </section>
    );
}

export default Hero;
