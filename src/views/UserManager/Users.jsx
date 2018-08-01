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
            selectedUser: undefined,
            deletedUser: undefined
        };
    }

    onToggleUserForm = () => {
        this.setState({
            isUserFormOpen: !this.state.isUserFormOpen
        });
    };

    onSubmitUser = user => {
        if (user.id) {
            this.props.onUpdateUser(user);
        } else {
            this.props.onAddUser(user);
        }
        this.onClearSelectedUser();
    };

    onConfirmDeleteUser = user => {
        if (user) this.props.onDeleteUser(user.id);
        this.onClearDeletedUser();
    };

    onDeleteUser = user => {
        this.setState({ deletedUser: user });
    };

    onEditUser = user => {
        this.setState({ selectedUser: user });
    };

    onClearSelectedUser = () => {
        this.setState({
            selectedUser: undefined
        });
    };

    onClearDeletedUser = () => {
        this.setState({
            deletedUser: undefined
        });
    };

    onUpdatePassword = (id, oldPassword, newPassword) => {
        this.props.onUpdatePassword(id, oldPassword, newPassword);
    };

    onResetPassword = id => {
        this.props.onResetPassword(id);
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
                        onSelectUser={this.onEditUser}
                        onDeleteUser={this.onDeleteUser}
                    />
                );
            });

        return (
            <div className="container-fluid">
                <div className="row">
                    <UserList
                        onToggleUserForm={this.onToggleUserForm}
                        isFormOpen={this.state.isUserFormOpen}
                    >
                        <UserItems />
                    </UserList>

                    <UserForm
                        onSubmitUser={this.onSubmitUser}
                        onToggleUserForm={this.onToggleUserForm}
                        isShow={this.state.isUserFormOpen}
                    />
                    <UserProfile
                        selectedUser={this.state.selectedUser}
                        onSubmitUser={this.onSubmitUser}
                        onClearSelectedUser={this.onClearSelectedUser}
                    />
                    <DeleteConfirmModal
                        deleteObject={this.state.deletedUser}
                        onConfirmDelete={this.onConfirmDeleteUser}
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
