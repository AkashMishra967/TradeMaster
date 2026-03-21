import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                
                <div className='col-12 col-lg-6 mt-5 text-center'>  {/* ✅ mobile pe full width */}
                    <img 
                        src='media/images/largestBroker.svg' 
                        className='img-fluid'  // ✅ responsive image
                        alt="Largest Broker"
                    />
                </div>

                <div className='col-12 col-lg-6 p-3 p-lg-5 mt-3'>  {/* ✅ mobile pe full width, kam padding */}
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ millions Zerodha clients contribute to over 15% of all volume in India daily by trading and investing in:</p>
                    
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stock & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>

                    <img 
                        src='media/images/pressLogos.png' 
                        style={{width:"90%"}} 
                        className='img-fluid'  // ✅ responsive
                        alt="Press Logos"
                    />
                </div>
            </div>
        </div>
     );
}

export default Awards;