import HomePage from "../components/HomePage";
import LoginComponent from "../components/LoginComponent";
import RegiterComponent from "../components/RegiterComponent";


export const paths = [
    {path: '/', component: HomePage, exact: true},
    {path: '/login', component: LoginComponent, exact: true},
    {path: '/register', component: RegiterComponent, exact: true},
];