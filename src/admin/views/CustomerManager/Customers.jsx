import React, { Component } from "react";
import { connect } from "react-redux";
import CustomerList from "../../components/Customer/CustomerList";
import CustomerItem from "../../components/Customer/CustomerItem";
import { Route, Switch } from "react-router-dom";
import CustomerDetail from "../../components/Customer/CustomerDetail";
import DeleteConfirmModal from "../../components/Modal/DeleteConfirmModal";
import {
    fetchCustomersRequest,
    deleteCustomerRequest
} from "../../actions/customerAction";

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCustomer: undefined,
            deletedCustomer: undefined
        };
    }

    onEditCustomer = customer => {
        this.setState({ selectedCustomer: customer });
    };

    onConfirmDeleteCustomer = customer => {
        if (customer) this.props.onDeleteCustomer(customer.id);
        this.onClearDeletedCustomer();
    };

    onDeleteCustomer = customer => {
        this.setState({ deletedCustomer: customer });
    };

    onClearDeletedCustomer = () => {
        this.setState({ deletedCustomer: undefined });
    };

    componentDidMount() {
        this.props.onFetchCustomers();
    }

    render() {
        const { match } = this.props;
        const { selectedCustomer, deletedCustomer } = this.state;
        const CustomerItems = () =>
            this.props.customers.map((customer, index) => {
                return (
                    <CustomerItem
                        key={index}
                        customer={customer}
                        match={match}
                        onSelectCustomer={this.onEditCustomer}
                        onDeleteCustomer={this.onDeleteCustomer}
                    />
                );
            });

        return (
            <div className="container-fluid">
                <div className="row">
                    <Switch>
                        {" "}
                        <Route
                            exact
                            path={match.path}
                            render={() => (
                                <CustomerList>
                                    <CustomerItems />
                                </CustomerList>
                            )}
                        />
                        <Route
                            exact
                            path={`${match.path}/:id`}
                            render={() => (
                                <CustomerDetail customer={selectedCustomer} />
                            )}
                        />
                    </Switch>
                    <DeleteConfirmModal
                        deleteObject={deletedCustomer}
                        onConfirmDelete={this.onConfirmDeleteCustomer}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCustomers: () => dispatch(fetchCustomersRequest()),
        onDeleteCustomer: id => dispatch(deleteCustomerRequest(id))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Customers);
