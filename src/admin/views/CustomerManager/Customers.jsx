import React, { Component } from "react";
import { connect } from "react-redux";
import CustomerList from "../../components/Customer/CustomerList";
import CustomerItem from "../../components/Customer/CustomerItem";
import { fetchCustomersRequest } from "../../actions/customerAction";

class Customers extends Component {
    componentDidMount() {
        this.props.onFetchCustomers();
    }

    render() {
        const CustomerItems = () =>
            this.props.customers.map((customer, index) => {
                return <CustomerItem key={index} customer={customer} />;
            });

        return (
            <div className="container-fluid">
                <div className="row">
                    <CustomerList>
                        <CustomerItems />
                    </CustomerList>
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
        onFetchCustomers: () => dispatch(fetchCustomersRequest())
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Customers);
