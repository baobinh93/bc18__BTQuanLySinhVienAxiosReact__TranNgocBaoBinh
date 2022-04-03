import { BAT_LOADING, TAT_LOADING } from "../constants";

let initial = {
  isLoading: true,
};
export const loadingReducer = (state = initial, action) => {
  switch (action.type) {
    case BAT_LOADING: {
      state.isLoading = true;
      return { ...state };
    }
    case TAT_LOADING: {
      state.isLoading = false;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};


