import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                
                <div className='col-12 col-md-6 p-3 p-md-5 mt-3'>  {/* ✅ mobile pe full width */}
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration:"none"}}>
                            Learn More <i className="fa fa-arrow-right" style={{marginLeft:"8px"}} aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className='col-12 col-md-6 text-center mb-4'>  {/* ✅ mobile pe full width */}
                    <img src={imageURL} className='img-fluid' alt={productName}/>  {/* ✅ responsive */}
                </div>

            </div>
        </div>
     );
}

export default RightSection;