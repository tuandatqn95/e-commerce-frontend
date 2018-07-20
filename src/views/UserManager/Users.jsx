import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "../../components/User/UserItem";
import UserList from "../../components/User/UserList";
import UserForm from "../../components/User/UserForm";
import {
    addUserRequest,
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
            isFormOpen: false
        });
    };

    onSubmitUser = user => {
        this.props.onAddUser(user);
        this.onToggleForm();
    };

    onClearSelectedUser = () => {
        this.setState({
            selectedUser: undefined
        });
    };

    render() {
        const UserItems = () =>
            this.props.users.map((user, index) => {
                return (
                    <UserItem
                        key={index}
                        user={user}
                    />
                );
            });

        const listSize = this.state.isFormOpen ? 8 : 12;

        return (
            <div className="container-fluid">
                <div className="row">
                    <UserList
                        size={listSize}
                        onToggleForm={this.onToggleForm}
                        isFormOpen={this.state.isFormOpen}
                    >
                        <UserItems />
                    </UserList>

                    <UserForm
                        size="4"
                        onSubmitUser={this.onSubmitUser}
                        onCloseForm={this.onCloseForm}
                        selectedUser={this.state.selectedUser}
                        isOpen={this.state.isFormOpen}
                        onClearSelectedUser={this.onClearSelectedUser}
                    />
                <button title='remove all' onClick={()=>{localStorage.removeItem('@USERS')}}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        users: state.users
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddUser: user => dispatch(addUserRequest(user)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);

