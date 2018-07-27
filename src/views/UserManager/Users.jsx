import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "../../components/User/UserItem";
import UserList from "../../components/User/UserList";
import UserForm from "../../components/User/UserForm";
import UserProfile from "../../components/User/UserProfile";
import DeleteConfirmModal from "../../components/Modal/DeleteConfirmModal";
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
            isUserFormOpen: false,
            isModalConfirmOpen: false,
            isUserProfileOpen: false,
            selectedUser: undefined
        };
    }

    onToggleUserForm = () => {
        this.setState({
            isUserFormOpen: !this.state.isUserFormOpen
        });
    };
    onToggleModalConfirm = () => {
        this.setState({
            isModalConfirmOpen: !this.state.isModalConfirmOpen
        });
    };
    onToggleUserProfile = () => {
        this.setState({
            isUserProfileOpen: !this.state.isUserProfilemOpen
        });
    };
    onCloseModalConfirm = () => {
        this.setState({
            isModalConfirmOpen: false,
            selectedUser: undefined
        });
    };
    onCloseUserProfile = () => {
        this.setState({
            isUserProfileOpen: false,
            selectedUser: undefined
        });
    };
    onCloseUserForm = () => {
        this.setState({
            isUserFormOpen: false,
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
        if (user) this.props.onDeleteUser(user.id);
        this.setState({ selectedUser: undefined });
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
                        onToggleModalConfirm={this.onToggleModalConfirm}
                        onToggleUserProfile={this.onToggleUserProfile}
                        onEditUser={this.onEditUser}
                        onDeleteUser={this.onDeleteUser}
                    />
                );
            });

        return (
            <div className="container-fluid">
                <div className="row">
                    <UserList
                        onToggleUserForm={this.onToggleUserForm}
                        isFormOpen={this.state.isFormOpen}
                    >
                        <UserItems />
                    </UserList>

                    <UserForm
                        onSubmitUser={this.onSubmitUser}
                        onCloseUserForm={this.onCloseUserForm}
                        isUserFormOpen={this.state.isUserFormOpen}
                    />
                    <UserProfile
                        isUserProfileOpen={this.state.isUserProfileOpen}
                        onCloseUserProfile={this.onCloseUserProfile}
                        user={this.state.selectedUser}
                        onSubmitUser={this.onSubmitUser}
                        onClearSelectedUser={this.onClearSelectedUser}
                    />
                    <DeleteConfirmModal
                        deleteObject={this.state.selectedUser}
                        onConfirmDelete={this.onDeleteUser}
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
