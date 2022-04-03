import React, { Component } from "react";
import { sinhVienService } from "./SinhVienService/sinhVienService";
import {
  actionBatLoading,
  actionSetDSSV,
  actionTatLoading,
} from "./redux/actions/index";
import { connect } from "react-redux";
import DanhSachSinhVien from "./components/DanhSachSinhVien";
import ModalSinhVien from "./components/ModalSinhVien";
import Loading from "./components/Loading";
class QuanLySinhVien extends Component {
  componentDidMount() {
    this.props.onLoading();
    sinhVienService
      .layDSSinhVien()
      .then((res) => {
        //console.log(res.data);
        this.props.layDSSinhVien(res.data);
        this.props.offLoading();
      })
      .catch((err) => {
        this.props.offLoading();
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <p className="display-3 py-1 text-center"> DANH SÁCH SINH VIÊN</p>
        <DanhSachSinhVien />
        <ModalSinhVien />
      </>
    );
  }
}

let mapDispatchToProp = (dispatch) => {
  return {
    layDSSinhVien: (_value) => {
      return dispatch(actionSetDSSV(_value));
    },
    offLoading: () => dispatch(actionTatLoading()),
    onLoading: () => dispatch(actionBatLoading()),
  };
};

export default connect(null, mapDispatchToProp)(QuanLySinhVien);
