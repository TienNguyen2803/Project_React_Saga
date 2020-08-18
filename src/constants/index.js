import AdminHomePage from '../containers/AdminHomePage';
import TaskBorad from '../containers/TaskBorad';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';

export const API_ENDPOINT= "http://localhost:9999";
export const STATUS = [
    {
        value : 0 ,
        label : "READY"
    },
    {
        value : 1 ,
        label : "INPROPRESS"
    },
    {
        value : 2,
        label : "COMPLETE"
    }
]

export const ADMIN_ROUTES = [
  {
    name :"Trang Admin",
    path:"/admin",
    exact:true,
    component: AdminHomePage
  },
  {
    name : "Trang quản lý Task",
    path : "/admin/task-board",
    exact :false,
    component : TaskBorad
  }
]

export const DEFAULT_ROUTES = [
  {
    name :"Login",
    path:"/login",
    exact:true,
    component: LoginPage
  },
  {
    name :"SignUp",
    path:"/signup",
    exact:true,
    component: SignUpPage
  }
]
