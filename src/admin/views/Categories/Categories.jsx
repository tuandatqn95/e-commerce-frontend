import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "../../components/Category/CategoryItem";
import CategoryList from "../../components/Category/CategoryList";
import CategoryForm from "../../components/Category/CategoryForm";
import {
    fetchCategoriesRequest,
    addCategoryRequest,
    updateCategoryRequest,
    deleteCategoryRequest
} from "../../actions/categoryAction";
import DeleteConfirmModal from "../../components/Modal/DeleteConfirmModal";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false,
            selectedCategory: undefined,
            deleteCategory: undefined
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

    onSubmitCategory = category => {
        if (category.id) {
            this.props.onUpdateCategory(category);
        } else {
            this.props.onAddCategory(category);
        }
        this.onToggleForm();
    };

    onEditCategory = category => {
        this.setState({
            isFormOpen: true,
            selectedCategory: category
        });
    };

    onDeleteCategory = category => {
        this.setState({ deleteCategory: category });
    };

    onConfirmDelete = category => {
        if (category) this.props.onDeleteCategory(category.id);
        this.setState({ deleteCategory: undefined });
        this.onCloseForm();
    };

    onClearSelectedCategory = () => {
        this.setState({
            selectedCategory: undefined
        });
    };

    componentDidMount() {
        this.props.onFetchCategories();
    }

    render() {
        const listSize = this.state.isFormOpen ? 8 : 12;
        const { categories } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <CategoryList
                        size={listSize}
                        onToggleForm={this.onToggleForm}
                        isFormOpen={this.state.isFormOpen}
                    >
                        <CategoryItems
                            categories={categories}
                            onEditCategory={this.onEditCategory}
                            onDeleteCategory={this.onDeleteCategory}
                        />
                    </CategoryList>

                    <CategoryForm
                        size="4"
                        onSubmitCategory={this.onSubmitCategory}
                        onCloseForm={this.onCloseForm}
                        selectedCategory={this.state.selectedCategory}
                        isOpen={this.state.isFormOpen}
                        onClearSelectedCategory={this.onClearSelectedCategory}
                    />
                </div>
                <DeleteConfirmModal
                    deleteObject={this.state.deleteCategory}
                    onConfirmDelete={this.onConfirmDelete}
                />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchCategories: () => dispatch(fetchCategoriesRequest()),
        onAddCategory: category => dispatch(addCategoryRequest(category)),
        onUpdateCategory: category => dispatch(updateCategoryRequest(category)),
        onDeleteCategory: id => dispatch(deleteCategoryRequest(id))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);

const CategoryItems = props => {
    return props.categories.map((category, index) => {
        return (
            <CategoryItem
                key={index}
                category={category}
                onEditCategory={props.onEditCategory}
                onDeleteCategory={props.onDeleteCategory}
            />
        );
    });
};