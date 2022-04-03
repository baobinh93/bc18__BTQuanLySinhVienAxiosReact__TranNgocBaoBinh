import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actionCapNhatSv,
  actionSetDSSV,
  actionSuaSv,
  actionThemSv,
} from "../redux/actions";
import { validator } from "../validator/validator";
import ReactDOM from "react-dom";
import { sinhVienService } from "../SinhVienService/sinhVienService";
class ModalSinhVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sinhVienAdd: {
        svId: "",
        name: "",
        email: "",
        sdt: "",
      },
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.resetModal = this.resetModal.bind(this);
  }
  resetModal() {
    let rsModal = {
      svId: "",
      name: "",
      email: "",
      sdt: "",
    };
    this.setState({
      sinhVienAdd: { ...rsModal },
    });
  }
  themSvAxios(_data) {
    sinhVienService
      .themSinhVien(_data)
      .then((res) => {
        sinhVienService.layDSSinhVien().then((res) => {
          this.props.layDSSV(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  capNhatSvAxios(_data, _id) {
    sinhVienService
      .capNhatSinhVien(_data, _id)
      .then((res) => {
        sinhVienService.layDSSinhVien().then((res) => {
          this.props.layDSSV(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleOnchange(e) {
    let cloneSv = this.state.sinhVienAdd;
    cloneSv[e.target.name] = e.target.value;
    this.setState({
      sinhVienAdd: cloneSv,
    });
    //console.log("svAdd:", cloneSv);
  }
  handleUpdateSv(key, value) {
    let cloneSv = this.props.svUpdate;
    cloneSv[key] = value;
    this.props.suaSv(cloneSv);
    console.log("svUpdate:", cloneSv);
  }
  validatorForm(svAdd) {
    //let svAdd = this.state.sinhVienAdd;
    let checkEmail = () => validator.kiemTraEmail(svAdd.email);
    let arrId = this.props.dsSv.map((sv) => sv.svId.toString());
    //console.log(arrId);
    //console.log(svAdd.svId);
    let checkId = () => validator.kiemTraIdDaSuDung(svAdd.svId, arrId);
    let checkName = () => validator.kiemTraKiTu(svAdd.name);
    let checkPhone = () => validator.kiemTraSo(svAdd.sdt);

    return checkId() && checkName() && checkEmail() && checkPhone();
  }
  validatorUpdateForm(_svUpdate) {
    let checkEmail = () => validator.kiemTraEmail(_svUpdate.email);

    let checkName = () => validator.kiemTraKiTu(_svUpdate.name);
    let checkPhone = () => validator.kiemTraSo(_svUpdate.sdt);

    return checkEmail() && checkName() && checkPhone();
  }
  render() {
    return (
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                {this.props.svUpdate.id ? "Sửa Sinh Viên" : "Thêm Sinh Viên"}
              </h4>

              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <form id="formModalSv">
                <div className="form-group">
                  <label htmlFor="pwd">Id</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ID"
                    name="svId"
                    onChange={(e) => {
                      if (this.props.svUpdate.id) {
                        this.handleUpdateSv(e.target.name, e.target.value);
                      } else {
                        this.handleOnchange(e);
                      }
                    }}
                    disabled={Boolean(this.props.svUpdate.id)}
                    value={
                      this.props.svUpdate.svId
                        ? this.props.svUpdate.svId
                        : this.state.sinhVienAdd.svId
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Ten:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập tên"
                    name="name"
                    onChange={(e) => {
                      if (this.props.svUpdate.id) {
                        this.handleUpdateSv(e.target.name, e.target.value);
                      } else {
                        this.handleOnchange(e);
                      }
                    }}
                    value={
                      this.props.svUpdate.name
                        ? this.props.svUpdate.name
                        : this.state.sinhVienAdd.name
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => {
                      if (this.props.svUpdate.id) {
                        this.handleUpdateSv(e.target.name, e.target.value);
                      } else {
                        this.handleOnchange(e);
                      }
                    }}
                    value={
                      this.props.svUpdate.email
                        ? this.props.svUpdate.email
                        : this.state.sinhVienAdd.email
                    }
                  />
                  <span id="emailCheck"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="sdt">So Dien Thoai:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    name="sdt"
                    onChange={(e) => {
                      if (this.props.svUpdate.id) {
                        this.handleUpdateSv(e.target.name, e.target.value);
                      } else {
                        this.handleOnchange(e);
                      }
                    }}
                    value={
                      this.props.svUpdate.sdt
                        ? this.props.svUpdate.sdt
                        : this.state.sinhVienAdd.sdt
                    }
                  />
                </div>
              </form>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => {
                  if (this.validatorForm(this.state.sinhVienAdd)) {
                    this.themSvAxios(this.state.sinhVienAdd);
                    this.resetModal();
                    alert("Thêm sinh viên thành công");
                  } else {
                    e.preventDefault();
                  }
                }}
                hidden={Boolean(this.props.svUpdate.id)}
              >
                Thêm
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => {
                  if (this.validatorUpdateForm(this.props.svUpdate)) {
                    //this.props.capNhatSv(this.props.svUpdate);
                    this.capNhatSvAxios(
                      this.props.svUpdate,
                      this.props.svUpdate.id
                    );

                    ReactDOM.findDOMNode(
                      document.getElementById("myModal")
                    ).reset();
                    alert("Cập nhật thành công");
                  }
                }}
                hidden={!Boolean(this.props.svUpdate.id)}
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    dsSv: state.quanLySinhVienReducer,
    svUpdate: state.sinhVienUpdateReducer,
  };
};
let mapDispatchToProp = (dispatch) => {
  return {
    layDSSV: (_data) => dispatch(actionSetDSSV(_data)),
    themSv: (sv) => dispatch(actionThemSv(sv)),
    suaSv: (sv) => dispatch(actionSuaSv(sv)),
    capNhatSv: (sv) => dispatch(actionCapNhatSv(sv)),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(ModalSinhVien);
