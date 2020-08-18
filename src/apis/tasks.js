import ApiService from "../commom/BaseServiceAxios";
import { API_ENDPOINT } from "../constants/index";
import qs from "query-string";

const url = "tasks";

export const getListTask = (param = {}) => {
  let queryString = "";
  if (Object.keys(param).length > 0) {
    queryString = `?${qs.stringify(param)}`;
  }

  console.log(`${API_ENDPOINT}/${url}${queryString}`);
  return ApiService.get(`${API_ENDPOINT}/${url}${queryString}`);
};

export const addTaks = (body) => {
  return ApiService.post(`${API_ENDPOINT}/${url}`, body);
};

export const update = (body, id) => {
  return ApiService.put(`${API_ENDPOINT}/${url}/${id}`, body);
};

export const deleteTask = (id) => {
  return ApiService.delete(`${API_ENDPOINT}/${url}/${id}`);
};
