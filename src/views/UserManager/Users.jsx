import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "../../components/User/UserItem";
import UserList from "../../components/User/UserList";
import UserForm from "../../components/User/UserForm";
import {
    fetchUsersRequest,
    addUserRequest,
    deleteUserRequest,
    updateUserRequest,
    updatePasswordRequest,
    resetPasswordRequest
} from "../../actions/userAction";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false,
            selectedUser: undefined
        };
    }
    onToggleForm = () => {
        this.setState({
            isFormOpen: !this.state.isFormOpen
        });
    };
    onCloseForm = () => {
        this.setState({
            isFormOpen: false,
            selectedUser: undefined
        });
    };
    onSubmitUser = user => {
        if (user.id) {
            this.props.onUpdateUser(user);
        } else {
            this.props.onAddUser(user);
        }
    };
    onDeleteUser = user => {
        this.props.onDeleteUser(user.id);
    };
    onEditUser = user => {
        this.setState({ selectedUser: user });
    };
    onUpdatePassword = (id, oldPassword, newPassword) => {
        this.props.onUpdatePassword(id, oldPassword, newPassword);
    };
    onResetPassword = id => {
        this.props.onResetPassword(id);
    };
    onClearSelectedUser = () => {
        this.setState({
            selectedUser: undefined
        });
    };
    componentDidMount() {
        this.props.onFetchUsers();
    }
    render() {
        const UserItems = () =>
            this.props.users.map((user, index) => {
                return (
                    <UserItem
                        key={index}
                        user={user}
                        onDeleteUser={this.onDeleteUser}
                        onSubmitUser={this.onSubmitUser}
                        onUpdatePassword={this.onUpdatePassword}
                        onResetPassword={this.onResetPassword}
                    />
                );
            });

        return (
            <div className="container-fluid">
                <div className="row">
                    <UserList
                        onToggleForm={this.onToggleForm}
                        isFormOpen={this.state.isFormOpen}
                    >
                        <UserItems />
                    </UserList>
                    {/* show modal form  */}
                    <UserForm
                        onSubmitUser={this.onSubmitUser}
                        onCloseForm={this.onCloseForm}
                        isOpen={this.state.isFormOpen}
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(fetchUsersRequest()),
        onAddUser: user => dispatch(addUserRequest(user)),
        onDeleteUser: id => dispatch(deleteUserRequest(id)),
        onUpdateUser: user => dispatch(updateUserRequest(user)),
        onUpdatePassword: (id, oldPassword, newPassword) =>
            dispatch(updatePasswordRequest(id, oldPassword, newPassword)),
        onResetPassword: id => dispatch(resetPasswordRequest(id))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
