import React from 'react';

function Universe() {
    return (  
        <div className='container mt-5'>
            <div className='row text-center'>

                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-6 col-md-4 p-3 mt-5'>  {/* ✅ mobile pe 2 columns */}
                    <img src="media/images/smallcaseLogo.png" className='img-fluid' alt="Smallcase"/>
                    <p className='text-small text-muted mt-3'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>

                <div className='col-6 col-md-4 p-3 mt-5'>  {/* ✅ mobile pe 2 columns */}
                    <img src="media/images/tijori.svg" className='img-fluid' style={{width:"120px", height:"auto"}} alt="Tijori"/>
                    <p className='text-small text-muted mt-3'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>

                <div className='col-6 col-md-4 p-3 mt-5'>  {/* ✅ mobile pe 2 columns */}
                    <img src="media/images/sensibullLogo.svg" className='img-fluid' alt="Sensibull"/>
                    <p className='text-small text-muted mt-3'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>

                <div className='col-6 col-md-4 p-3 mt-5'>  {/* ✅ mobile pe 2 columns */}
                    <img src="media/images/ditto-logo.png" className='img-fluid' style={{width:"120px", height:"auto"}} alt="Ditto"/>
                    <p className='text-small text-muted mt-3'>Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free.</p>
                </div>

                <div className='col-6 col-md-4 p-3 mt-5'>  {/* ✅ mobile pe 2 columns */}
                    <img src="media/images/streakLogo.png" className='img-fluid' style={{width:"120px", height:"auto"}} alt="Streak"/>
                    <p className='text-small text-muted mt-3'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>

                <div className='col-6 col-md-4 p-3 mt-5'>  {/* ✅ mobile pe 2 columns */}
                    <img src="media/images/zerodhafundhouse.png" className='img-fluid' style={{width:"120px", height:"auto"}} alt="Zerodha Fund House"/>
                    <p className='text-small text-muted mt-3'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>

                <div className='mt-5 mb-5'>
                    <button 
                        className="p-2 btn btn-primary fs-5"
                        style={{width:"200px", margin:"0 auto", display:"block"}}  // ✅ mobile pe sahi width
                    >
                        Signup Now
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Universe;