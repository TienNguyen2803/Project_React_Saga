import { toastError } from "../commom/helper/toastHelper";
import * as taskConstant from "../constants/tasks";
import { findIndex } from "lodash";
const initialState = {
  listTasks: [],
  taskEditing: null,
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case taskConstant.FETCH_TASK: {
      return {
        ...state,
        listTasks: [],
      };
    }
    case taskConstant.FETCH_TASK_SUCCESS: {
      const { data, error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTasks: data,
      };
    }
    case taskConstant.FETCH_TASK_FAILE: {
      const { error } = action.payload;
      toastError(error);
      console.log(action.payload);
      return {
        ...state,
        listTasks: [],
      };
    }
    case taskConstant.FETCH_FILTER: {
      return {
        ...state,
      };
    }
    case taskConstant.FILTERED_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTasks: data,
      };
    }
    case taskConstant.ADD_TASK: {
      return {
        ...state,
      };
    }
    case taskConstant.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTasks: state.listTasks.concat([data]),
      };
    }
    case taskConstant.ADD_TASK_FAILE: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case taskConstant.TASK_EDITTING: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task,
      };
    }
    case taskConstant.UPDATE_TASK: {
      console.log("1");
      const { task } = action.payload;
      const { listTasks } = state;
      const index = findIndex(listTasks, (o) => {
        return o.id === task.id;
      });
      const newList = [
        ...listTasks.slice(0, index),
        task,
        ...listTasks.slice(index + 1),
      ];
      console.log(newList);
      return {
        ...state,
        listTasks: newList,
      };
    }
    case taskConstant.DELETE_TASK: {
      return {
        ...state,
      };
    }
    case taskConstant.DELETE_TASK_SUCCESS: {
      const { id } = action.payload;
      return {
        ...state,
        listTasks: state.listTasks.filter((o) => o.id !== id),
      };
    }
    default:
      return state;
  }
};

export default tasks;
