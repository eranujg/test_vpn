import React from 'react';
const Section1 = () => {
    return (
        <section className="custom-sec2 w3_bg">
            <div className="container w3_bg">
                <div className="row align-items-center custom-sec2-row1 w3_bg">
                    <div className="col-md-8 col-lg-8 col-sm-12 w3_bg">
                        <h1>Top 5 Best VPNs in 2023 (with Risk-Free Trials)</h1>
                        <div className="ml4_tested_on mobile-display-block desktop-display-block w3_bg">
                            <abbr>
                                Tested for users in
                                <span className="flag">
                                    <img width={250} height={125} src="https://vpnradar.org/wp-content/plugins/user-location-and-ip/flags/ca.png" alt="flag" />
                                </span>
                                <span className="country">Canada</span> <span className="date"> - May 2023</span>
                            </abbr>
                        </div>
                        <div className="main_des mobile-display-none desktop-display-none w3_bg">
                            <p>
                                <span>
                                    The only way to stop the blatant invasion of privacy your internet providers commit every time you get online -not to mention the speed throttling they use to trick you into upping your subscription- is using a
                                    VPN.
                                </span>
                            </p>
                            <p><span>To prevent them from collecting and selling your data, we present to you the best-in-class VPN services with a plethora of features:</span></p>
                        </div>
                        <div className="des_bullet_point mobile-display-block desktop-display-block w3_bg">
                            <ul>
                                <li>Browse websites and use apps safely</li>
                                <li>Try risk-free with a 100% money-back guarantee</li>
                                <li>Surf the web anonymously</li>
                                <li>Cover all your mobile and desktop devices with one subscription</li>
                            </ul>
                        </div>
                        <div className="featured-on w3_bg">
                            <p className="p13">vpnRadar's VPNs have been featured on:</p>
                            <ul className="featured-on-logos">
                                <li><img src="https://vpnradar.org/wp-content/themes/authority-pro/images/Company-Logo.svg" className="img-rounded" alt="featured_logo" width="auto" height="auto" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 text-center w3_bg">
                        <div className="lad mobile-display-none desktop-display-block w3_bg">
                            <img
                                width="1261"
                                height="792"
                                src="https://vpnradar.org/wp-content/uploads/2022/06/Country_Images-min.png"
                                className="attachment-full size-full"
                                alt="best vpn"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Section1;