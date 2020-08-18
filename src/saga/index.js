import { call, delay, put, takeLatest } from "redux-saga/effects";
import * as taskType from "../constants/tasks";
import { getListTask, addTaks, update, deleteTask } from "../apis/tasks";
import {
  fetchTasksFailed,
  fetchTasksSuccess,
  addTasksSuccess,
  addTasksFailed,
  fetchTasks,
  deleteTaskSuccess,
} from "../actions/tasks";
import { hideLoading, showLoading } from "../actions/ui";
import { hideModal } from "../actions/modalGlobal";

import { STATUS } from "../constants/index";

function* watchFetchTasks({ payload }) {
  try {
    yield put(showLoading());
    const { param } = payload;
    const res = yield call(getListTask, param);
    const { data } = res;
    yield put(fetchTasksSuccess(data));
    yield delay(1000);
    yield put(hideLoading());
  } catch (e) {
    yield put(fetchTasksFailed(e));
  }
}

function* fetchFilter({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(
    fetchTasks({
      q: keyword,
    })
  );
  //const action = yield put()
  //yield put(fetchFilterSuccess(listTaskFiltered));
}

function* addTask({ payload }) {
  try {
    yield put(showLoading());
    const { title, description } = payload.data;
    const res = yield call(addTaks, {
      title,
      description,
      status: STATUS[0].value,
    });
    yield put(addTasksSuccess(res.data));
    yield put(hideModal());
    yield delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
    yield put(addTasksFailed(error));
  }
}

function* updateTasks({ payload }) {
  try {
    const { task } = payload;
    yield call(update, task, task.id);

    yield put(showLoading());
    yield put(hideModal());
    yield delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}

function* deleteTaskSaga({ payload }) {
  try {
    const { id } = payload;
    console.log(id);
    yield put(showLoading());
    yield call(deleteTask, id);
    yield put(deleteTaskSuccess(id));
    yield put(hideModal());
    yield delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}

function* rootSaga() {
  yield takeLatest(taskType.FETCH_TASK, watchFetchTasks);
  yield takeLatest(taskType.FETCH_FILTER, fetchFilter);
  yield takeLatest(taskType.ADD_TASK, addTask);
  yield takeLatest(taskType.UPDATE_TASK, updateTasks);
  yield takeLatest(taskType.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
