import * as modalTypes from "../constants/modalGlobal";

const initialState = {
  showModal: false,
  component: null,
  title: "",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.SHOW_MODAL: {
      return {
        ...state,
        showModal: true,
      };
    }
    case modalTypes.HIDE_MODAL: {
      return {
        ...state,
        component: null,
        title: "",
        showModal: false,
      };
    }
    case modalTypes.CHANGE_TITLE_MODAL: {
      console.log(action);
      const { title } = action.payload;
      return {
        ...state,
        title : title,
      };
    }
    case modalTypes.CHANGE_CONTENT_MODAL: {
      const { component } = action.payload;
      return {
        ...state,
        component : component,
      };
    }
    default:
      return {...state};
  }
};

export default modalReducer;
