import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>
                
                <div className='col-12 col-md-4 mb-4'>  {/* ✅ mobile pe full width */}
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='ms-3' style={{textDecoration:"none"}}>
                        See Pricing <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

                <div className='col-12 col-md-6 offset-md-2 mb-5'>  {/* ✅ mobile pe full width */}
                    <div className='row text-center'>
                        <div className='col-6 p-3 border'>  {/* ✅ col-6 fixed */}
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                        <div className='col-6 p-3 border'>  {/* ✅ col-6 fixed */}
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Pricing;