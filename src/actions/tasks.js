import * as taskContants from "../constants/tasks";

export const fetchTasks = (param = {}) => {
  return {
    type: taskContants.FETCH_TASK,
    payload: {
      param,
    },
  };
};

export const fetchTasksSuccess = (data) => {
  return {
    type: taskContants.FETCH_TASK_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetchTasksFailed = (error) => {
  return {
    type: taskContants.FETCH_TASK_FAILE,
    payload: {
      error: error,
    },
  };
};

export const fetchFilter = (keyword) => {
  return {
    type: taskContants.FETCH_FILTER,
    payload: {
      keyword,
    },
  };
};
export const fetchFilterSuccess = (data) => {
  return {
    type: taskContants.FILTERED_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTasks = (data) => {
  return {
    type: taskContants.ADD_TASK,
    payload: {
      data,
    },
  };
};

export const addTasksSuccess = (data) => {
  return {
    type: taskContants.ADD_TASK_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const addTasksFailed = (error) => {
  return {
    type: taskContants.ADD_TASK_FAILE,
    payload: {
      error: error,
    },
  };
};

export const taskEditting = (task) => {
  return {
    type: taskContants.TASK_EDITTING,
    payload: {
      task,
    },
  };
};

export const updateTask = (task) => {
  return {
    type: taskContants.UPDATE_TASK,
    payload: {
      task,
    },
  };
};

export const actDeleteTask = (id) => {
  return {
    type : taskContants.DELETE_TASK,
    payload:{
      id
    }
  }
}

export const deleteTaskSuccess = (id) => {
  return {
    type : taskContants.DELETE_TASK_SUCCESS,
    payload:{
      id
    }
  }
}

//redux thunk

// export const fetchTasksRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchTasks());
//     taskApi
//       .fectchTasks()
//       .then((res) => {
//         console.log(res.data);
//         dispatch(fetchTasksSuccess(res.data));
//       })
//       .catch((err) => {
//         console.log('dsadasdsa');
//         dispatch(fetchTasksFailed(err));
//       });
//   };
// };
