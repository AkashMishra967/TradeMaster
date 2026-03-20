import React from 'react';
function CreateTicket() {
    return ( 
        <div className='container'>
<div className='row p-5 mt-5 mb-5'>
<h1 className='fs-2 '>
    To create a ticket , select a relevent topic
</h1>

<div className='col-4 p-5 mt-2 mb-2'>
<h4 className=''><i class="fa fa-plus-circle me-2 " aria-hidden="true"></i>Account Opening</h4>

<a href='#'style={{textDecoration:"none" ,lineHeight:"2.5"}}>Online Account Opening</a>
<br></br>
<a href='#'style={{textDecoration:"none" ,lineHeight:"2.5"}}>Offline Account Opening</a>
<br></br>
<a href='#'style={{textDecoration:"none" ,lineHeight:"2.5"}}>Company, Partnership and HUF Account</a>
<br></br>
<a href='#'style={{textDecoration:"none" ,lineHeight:"2.5"}}>Opening</a>
<br></br>
<a href='#'style={{textDecoration:"none" ,lineHeight:"2.5"}}>NRI Account Opening</a>
<br></br>
<a href='#'style={{textDecoration:"none" ,lineHeight:"2.5"}}>Charges at Zerodha</a>
<br></br>
<a href='#'style={{textDecoration:"none" ,lineHeight:"2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a>
<br></br>
<a href='#'style={{textDecoration:"none" ,lineHeight:"2.5"}}>Getting Started</a>

</div>
<div className='col-4 p-5 mt-2 mb-2'>
    <h4 className='fs-5'> <i class="fa fa-user-circle me-2" aria-hidden="true" style={{marginLeft:"0px"}}></i>Your Zerodha Account </h4>
<a href='#' style={{textDecoration:"none"}}>Your Profile</a>
<br></br><br></br>
<a href='#' style={{textDecoration:"none"}}>Client Master Report (CMR) and Depository Participant (DP)</a>
<br></br><br></br>
<a href='#' style={{textDecoration:"none"}}>Nomination</a>
<br></br><br></br>
<a href='#' style={{textDecoration:"none"}}>Transfer and conversion of securities</a>
</div>

<div className='col-4 p-5 mt-2 mb-2'>
    <h4 className='fs-5 gap'><i class="fa fa-wpexplorer me-2" aria-hidden="true"></i>Console</h4>
<a href='#' style={{textDecoration:"none"}}>Portfolio</a>
<br></br><br></br>
<a href='#' style={{textDecoration:"none"}}>Corporate actions</a>
<br></br><br></br>
<a href='#' style={{textDecoration:"none"}}>Funds statement</a>
<br></br><br></br>
<a href='#' style={{textDecoration:"none"}}>Reports</a>
<br></br><br></br>
<a href='#' style={{textDecoration:"none"}}>Profile</a>
<br></br><br></br>
<a href='#' style={{textDecoration:"none"}}>Segments</a>

</div>
</div>
        </div>
     );
}

export default CreateTicket;