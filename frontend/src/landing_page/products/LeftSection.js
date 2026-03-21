import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                
                <div className='col-12 col-md-6 text-center mb-4'>  {/* ✅ mobile pe full width */}
                    <img src={imageURL} className='img-fluid' alt={productName}/>  {/* ✅ responsive */}
                </div>
                
                <div className='col-12 col-md-6 p-3 p-md-5'>  {/* ✅ mobile pe full width */}
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    
                    <div className='d-flex flex-wrap gap-3'>  {/* ✅ mobile pe wrap hoga */}
                        <a href={tryDemo} style={{textDecoration:"none"}}>
                            Try Demo <i className="fa fa-arrow-right" style={{marginLeft:"8px"}} aria-hidden="true"></i>
                        </a>
                        <a href={learnMore} style={{textDecoration:"none"}}>
                            Learn More <i className="fa fa-arrow-right" style={{marginLeft:"8px"}} aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className='mt-3 d-flex flex-wrap gap-3'>  {/* ✅ mobile pe wrap hoga */}
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" className='img-fluid' alt="Google Play"/>
                        </a>
                        <a href={appStore}>
                            <img src="media/images/appstoreBadge.svg" className='img-fluid' alt="App Store"/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default LeftSection;