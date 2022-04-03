import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { actionSetDSSV, actionSuaSv, actionXoaSv } from "../redux/actions";
import { sinhVienService } from "../SinhVienService/sinhVienService";

class ItemSinhVien extends Component {
  xoaSinhVienAxios(_id) {
    sinhVienService
      .xoaSinhVien(_id)
      .then((res) => {
        sinhVienService.layDSSinhVien().then((res) => {
          this.props.layDSSV(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let dsSv = this.props.dsSv;
    // console.log(dsSv);
    return dsSv?.map((sv) => {
      return (
        <tr key={sv.svId}>
          <td>{sv.svId}</td>
          <td>{sv.name}</td>
          <td>{sv.email}</td>
          <td>{sv.sdt}</td>
          <td>
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#myModal"
              onClick={() => {
                this.props.suaSV(sv);
              }}
            >
              Sửa
            </button>
            <button
              className="btn btn-danger ml-1"
              onClick={() => {
                window.confirm("Bạn có muốn xoá") &&
                  this.xoaSinhVienAxios(sv.id);
              }}
            >
              {" "}
              Xoá{" "}
            </button>
            <button className="btn btn-primary ml-1" onClick={() => {}}>
              <NavLink className="text-white" to={"/detail/" + sv.id}>
                Xem Chi Tiết
              </NavLink>
            </button>
          </td>
        </tr>
      );
    });
    //return <div> Test </div>;
  }
}

let mapStateToProps = (state) => {
  return {
    dsSv: state.quanLySinhVienReducer,
  };
};
let mapDispatchToProp = (dispatch) => {
  return {
    suaSV: (sv) => dispatch(actionSuaSv(sv)),
    layDSSV: (_data) => dispatch(actionSetDSSV(_data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(ItemSinhVien);
