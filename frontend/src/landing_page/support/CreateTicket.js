import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-3 p-md-5 mt-5 mb-5'>
                <h1 className='fs-2 mb-4'>
                    To create a ticket, select a relevant topic
                </h1>

                <div className='col-12 col-md-4 p-3 p-md-5 mt-2 mb-2'>  {/* ✅ mobile pe full width */}
                    <h4><i className="fa fa-plus-circle me-2" aria-hidden="true"></i>Account Opening</h4>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Online Account Opening</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Offline Account Opening</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Company, Partnership and HUF Account</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Opening</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>NRI Account Opening</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Charges at Zerodha</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Getting Started</a>
                </div>

                <div className='col-12 col-md-4 p-3 p-md-5 mt-2 mb-2'>  {/* ✅ mobile pe full width */}
                    <h4 className='fs-5'><i className="fa fa-user-circle me-2" aria-hidden="true"></i>Your Zerodha Account</h4>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Your Profile</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Client Master Report (CMR) and Depository Participant (DP)</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Nomination</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Transfer and conversion of securities</a>
                </div>

                <div className='col-12 col-md-4 p-3 p-md-5 mt-2 mb-2'>  {/* ✅ mobile pe full width */}
                    <h4 className='fs-5'><i className="fa fa-wpexplorer me-2" aria-hidden="true"></i>Console</h4>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Portfolio</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Corporate actions</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Funds statement</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Reports</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Profile</a>
                    <a href='#' style={{textDecoration:"none", lineHeight:"2.5", display:"block"}}>Segments</a>
                </div>

            </div>
        </div>
     );
}

export default CreateTicket;