import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "../../components/User/UserItem";
import UserList from "../../components/User/UserList";
import UserForm from "../../components/User/UserForm";
import ChangePassword from "../../components/User/ChangePassword";
import ModalConfirm from "../../components/User/ModalComfirm";
import UserProfile from "../../components/User/UserProfile";
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
                        onEditUser={this.onEditUser}
                        onDeleteUser={this.onDeleteUser}
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

                    <UserForm
                        onSubmitUser={this.onSubmitUser}
                        onCloseForm={this.onCloseForm}
                        isOpen={this.state.isFormOpen}
                    />
                    <ChangePassword
                        user={this.state.selectedUser}
                        onUpdatePassword={this.props.onUpdatePassword}
                        onResetPassword={this.props.onResetPassword}
                    />
                    <ModalConfirm
                        user={this.state.selectedUser}
                        onConfirm={this.onDeleteUser}
                    />
                    <UserProfile
                        user={this.state.selectedUser}
                        onSubmitUser={this.onSubmitUser}
                        isOpen={this.state.isFormOpen}
                        onClearSelectedUser={this.onClearSelectedUser}
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
