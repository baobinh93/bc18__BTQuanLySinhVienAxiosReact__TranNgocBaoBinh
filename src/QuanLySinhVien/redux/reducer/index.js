import { combineReducers } from "redux";
import { quanLySinhVienReducer } from "./quanLySinhVienReducer";
import { sinhVienUpdateReducer } from "./sinhVienUpdateReducer";
import { loadingReducer } from "./loadingReducer";
import { breadcumbComponentReducer } from "./breadcumComponentReducer";
export let rootReducer = combineReducers({
  sinhVienUpdateReducer,
  quanLySinhVienReducer,
  loadingReducer,
  breadcumbComponentReducer,
});
