import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-3 p-md-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="#">Track Ticket</a>
            </div>

            <div className="row p-3 p-md-5 m-1 m-md-3">
                
                <div className="col-12 col-md-6 p-3 p-md-5">  {/* ✅ mobile pe full width */}
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                    <input 
                        placeholder="Eg. how do I activate F&O"
                        className="w-100 mt-3 mb-3 p-2"  // ✅ mobile pe full width input
                        style={{border:"1px solid #ccc", borderRadius:"5px"}}
                    />
                    <div className="d-flex flex-column gap-2">  {/* ✅ links neeche neeche */}
                        <a href="#">Track account opening</a>
                        <a href="#">Track segment activation</a>
                        <a href="#">Intraday margins</a>
                        <a href="#">Kite user manual</a>
                    </div>
                </div>

                <div className="col-12 col-md-6 p-3 p-md-5">  {/* ✅ mobile pe full width */}
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li><a href="#">Current Takeover and Delisting - January 2024</a></li>
                        <li><a href="#">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>

            </div>
        </section>
    );
}

export default Hero;