import React, { Component } from "react";
import { connect } from "react-redux";
import ItemSinhVien from "./ItemSinhVien";
import { actionSuaSv } from "../redux/actions";
import Loading from "./Loading";

class DanhSachSinhVien extends Component {
  render() {
    return (
      <div className="container p-2">
        <button
          className="btn btn-primary m-2"
          data-toggle="modal"
          data-target="#myModal"
          onClick={() => {
            this.props.resetSv();
          }}
        >
          {" "}
          Thêm Sinh Viên
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Sdt</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <Loading />
            <ItemSinhVien />
          </tbody>
        </table>
      </div>
    );
  }
}

let mapDispatchToProp = (dispatch) => {
  return {
    resetSv: () => dispatch(actionSuaSv(null)),
  };
};

export default connect(null, mapDispatchToProp)(DanhSachSinhVien);
