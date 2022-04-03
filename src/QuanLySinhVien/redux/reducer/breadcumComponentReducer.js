import { BAT_DETAIL, TAT_DETAIL } from "../constants";

export const breadcumbComponentReducer = (state = true, action) => {
  switch (action.type) {
    case BAT_DETAIL: {
      return false;
    }
    case TAT_DETAIL: {
      return true;
    }
    default: {
      return state;
    }
  }
};
