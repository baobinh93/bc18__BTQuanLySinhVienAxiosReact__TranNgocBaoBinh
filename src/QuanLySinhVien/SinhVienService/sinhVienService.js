import axios from "axios";
const BASE_URL = "https://620e4f62585fbc3359ddaf35.mockapi.io/svForMockAPI";
export const sinhVienService = {
  layDSSinhVien: () => {
    return axios({
      method: "GET",
      url: BASE_URL,
    });
  },
  layChiTietSV: (_id) => {
    return axios({
      method: "GET",
      url: BASE_URL + "/" + _id,
    });
  },
  xoaSinhVien: (_id) => {
    return axios({
      method: "DELETE",
      url: BASE_URL + "/" + _id,
    });
  },
  themSinhVien: (_dssv) => {
    return axios({
      method: "POST",
      url: BASE_URL,
      data: _dssv,
    });
  },
  capNhatSinhVien: (_data, _id) => {
    return axios({
      method: "PUT",
      url: BASE_URL + "/" + _id,
      data: _data,
    });
  },
};
