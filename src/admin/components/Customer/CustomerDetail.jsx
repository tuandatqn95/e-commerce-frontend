import React, { Component } from "react";
import { default_avatar_encode_base64 } from "../../constants/encodedImage";

class CustomerDetail extends Component {
    render() {
        const { name, email, phone, address } = this.props.customer;
        const Image = () => (
            <img alt="avatar" src={default_avatar_encode_base64} />
        );

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card card-profile">
                            <div className="card-avatar">{<Image />}</div>
                            <div className="card-body">
                                <h3 className="card-title">{name}</h3>
                                <div className="row">
                                    <label className="col-md-4 col-form-label">
                                        Email
                                    </label>
                                    <div className="col-sm-8">
                                        <div className="form-group">
                                            <p className="form-control-static float-left">
                                                {email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-4 col-form-label">
                                        Phone
                                    </label>
                                    <div className="col-sm-8">
                                        <div className="form-group">
                                            <p className="form-control-static float-left">
                                                {phone}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-4 col-form-label">
                                        Address
                                    </label>
                                    <div className="col-sm-8">
                                        <div className="form-group">
                                            <p className="form-control-static float-left">
                                                {address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerDetail;
