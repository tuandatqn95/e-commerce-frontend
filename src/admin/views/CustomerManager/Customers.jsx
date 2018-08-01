import React, { Component } from "react";
import CustomerList from "../../components/Customer/CustomerList";
import CustomerItem from "../../components/Customer/CustomerItem";

class Customers extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <CustomerList>
                        <CustomerItem />
                    </CustomerList>
                </div>
            </div>
        );
    }
}

export default Customers;
