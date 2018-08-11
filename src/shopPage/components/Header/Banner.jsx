import React, { Component } from "react";

class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Banner Popup Start */}
                <div className="popup_banner">
                    <span className="popup_off_banner">×</span>
                    <div className="banner_popup_area">
                        <img src="/shoppage/img/banner/pop-banner.jpg" alt="" />
                    </div>
                </div>
                {/* Banner Popup End */}
                {/* Newsletter Popup Start */}
                <div className="popup_wrapper">
                    <div className="test">
                        <span className="popup_off">Close</span>
                        <div className="subscribe_area text-center mt-60">
                            <h2>Newsletter</h2>
                            <p>
                                Subscribe to the Truemart mailing list to
                                receive updates on new arrivals, special offers
                                and other discount information.
                            </p>
                            <div className="subscribe-form-group">
                                <form action="#">
                                    <input
                                        autoComplete="off"
                                        name="message"
                                        id="message"
                                        placeholder="Enter your email address"
                                        type="text"
                                    />
                                    <button type="submit">subscribe</button>
                                </form>
                            </div>
                            <div className="subscribe-bottom mt-15">
                                <input
                                    id="newsletter-permission"
                                    type="checkbox"
                                />
                                <label htmlFor="newsletter-permission">
                                    Don't show this popup again
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter Popup End */}
            </React.Fragment>
        );
    }
}

export default Banner;
