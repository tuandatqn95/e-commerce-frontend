import DashBoard from "../views/DashBoard/DashBoard";
import Categories from "../views/Categories/Categories";
import Products from "../views/Products/Products";
import Users from "../views/UserManager/Users";
import Customers from "../views/CustomerManager/Customers";

const appRoutes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Dashboard Page",
        icon: "dashboard",
        component: DashBoard
    },
    {
        path: "/categories",
        sidebarName: "Category",
        navbarName: "Category Management",
        icon: "category",
        component: Categories
    },
    {
        path: "/products",
        sidebarName: "Product",
        navbarName: "Product Management",
        icon: "business_center",
        component: Products
    },
    {
        path: "/users",
        sidebarName: "User",
        navbarName: "User Management",
        icon: "person",
        component: Users
    },
    {
        path: "/customers",
        sidebarName: "Customer",
        navbarName: "Customer Management",
        icon: "face",
        component: Customers
    },
    {
        redirect: true,
        path: "/",
        to: "/dashboard"
    }
];

export default appRoutes;
