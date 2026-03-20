import React from 'react';

function Footer() {
  return (
    <footer className='border-top' style={{ backgroundColor: "#fafafa" }}>
      <div className='container mt-5'>

        <div className='row mt-5'>

          {/* First Column */}
          <div className='col'>
            <img src='media/images/logo.svg' style={{ height: "25px", width: "200px" }} alt="logo" />

            <p className="mt-3">
              &copy; 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className='mt-3' style={{ cursor: "pointer" }}>
              <i className="fa fa-twitter me-3 fs-3 text-muted"></i>
              <i className="fa fa-facebook me-3 fs-3 text-muted"></i>
              <i className="fa fa-instagram me-3 fs-3 text-muted"></i>
              <i className="fa fa-linkedin me-3 fs-3 text-muted"></i>

              <hr />

              <i className="fa fa-whatsapp me-3 fs-3 text-muted"></i>
              <i className="fa fa-youtube-play me-3 fs-2 text-muted"></i>
              <i className="fa fa-telegram me-3 fs-3 text-muted"></i>
            </div>
          </div>

          {/* Company */}
          <div className='col mb-5'>
            <p>Company</p>
            <div className="d-flex flex-column gap-2">
              <a className='text-muted text-decoration-none' href='#'>About</a>
              <a className='text-muted text-decoration-none' href='#'>Products</a>
              <a className='text-muted text-decoration-none' href='#'>Pricing</a>
              <a className='text-muted text-decoration-none' href='#'>Referral programme</a>
              <a className='text-muted text-decoration-none' href='#'>Careers</a>
              <a className='text-muted text-decoration-none' href='#'>Zerodha.tech</a>
              <a className='text-muted text-decoration-none' href='#'>Press & media</a>
              <a className='text-muted text-decoration-none' href='#'>Zerodha cares (CSR)</a>
            </div>
          </div>

          {/* Support */}
          <div className='col'>
            <p>Support</p>
            <div className="d-flex flex-column gap-2">
              <a className='text-muted text-decoration-none' href='#'>Contact us</a>
              <a className='text-muted text-decoration-none' href='#'>Support portal</a>
              <a className='text-muted text-decoration-none' href='#'>How to file a complaint?</a>
              <a className='text-muted text-decoration-none' href='#'>Status of your complaints</a>
              <a className='text-muted text-decoration-none' href='#'>Bulletin</a>
              <a className='text-muted text-decoration-none' href='#'>Circular</a>
              <a className='text-muted text-decoration-none' href='#'>Z-Connect blog</a>
              <a className='text-muted text-decoration-none' href='#'>Downloads</a>
            </div>
          </div>

          {/* Account */}
          <div className='col'>
            <p>Account</p>
            <div className="d-flex flex-column gap-2">
              <a className='text-muted text-decoration-none' href='#'>Open account</a>
              <a className='text-muted text-decoration-none' href='#'>Fund transfer</a>
              <a className='text-muted text-decoration-none' href='#'>60 day challenge</a>
            </div>
          </div>

          {/* Quick links */}
          <div className='col'>
            <p>Quick links</p>
            <div className="d-flex flex-column gap-2">
              <a className='text-muted text-decoration-none' href='#'>Upcoming IPOs</a>
              <a className='text-muted text-decoration-none' href='#'>Brokerage charges</a>
              <a className='text-muted text-decoration-none' href='#'>Market holidays</a>
              <a className='text-muted text-decoration-none' href='#'>Economic calendar</a>
              <a className='text-muted text-decoration-none' href='#'>Calculators</a>
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className='mt-5 text-muted' style={{ fontSize: "16px" }}>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.

*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.

Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;