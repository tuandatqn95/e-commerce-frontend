import React, { Component } from "react";
import { Styles } from "../../constants/Styles";

class UserProfile extends Component {
    render() {
        const Image = (
            <img
                className="img-raised rounded-circle img-fluid"
                alt=""
                style={Styles.circleImage}
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/24059201_2183309631694535_209216005089080199_n.png?_nc_cat=0&oh=31e83688b389d526dd1f756bd149c3e8&oe=5BDBDF35"
            />
        );
        return (
            <div>
                <div className="modal fade" id="modal-profile">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div
                                className="modal-header "
                                style={Styles.backgroundModalHeader}
                            >
                                <h4
                                    className="modal-title"
                                    style={Styles.colorModalHeader}
                                >
                                    User Profile
                                </h4>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container text-center">
                                    <div className="avatar">{Image}</div>
                                    <h3>
                                        <b>username</b>
                                    </h3>
                                </div>
                                <p>ID: </p>
                                <p>Email: </p>
                                <p>Phone:</p>
                                <p>Address</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    className="btn btn-primary pull-right"
                                >
                                    Change Password
                                </button>
                                <button
                                    type="reset"
                                    className="btn btn-default pull-right"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
