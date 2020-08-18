import AdminHomePage from '../containers/AdminHomePage';
import TaskBorad from '../containers/TaskBorad';


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
    path:"/",
    exact:true,
    component: AdminHomePage
  },
  {
    name : "Trang quản lý Task",
    path : "/task-board",
    exact :false,
    component : TaskBorad
  }
]
