import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "../../components/User/UserItem";
import UserList from "../../components/User/UserList";
import UserForm from "../../components/User/UserForm";
import {
    fetchUsersRequest,
    addUserRequest,
    deleteUserRequest
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
        } else {
            this.props.onAddUser(user);
        }
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
                        onDeleteUser={this.props.onDeleteUser}
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
                        selectedUser={this.state.selectedUser}
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
        onDeleteUser: id => dispatch(deleteUserRequest(id))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
