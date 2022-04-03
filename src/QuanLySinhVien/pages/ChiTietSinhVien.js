import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../components/Loading";
import {
  actionBatDetail,
  actionBatLoading,
  actionTatLoading,
} from "../redux/actions";
import { sinhVienService } from "../SinhVienService/sinhVienService";

class ChiTietSinhVien extends Component {
  state = {
    sv: {},
  };
  componentDidMount() {
    this.props.onLoading();
    this.props.onDetail();
    sinhVienService
      .layChiTietSV(this.props.match.params.id)
      .then((res) => {
        this.setState({
          sv: res.data,
        });
        this.props.offLoading();
      })
      .catch((err) => {
        this.props.offLoading();
        console.log(err);
      });
  }

  render() {
    let sv = this.state.sv;
    return (
      <div className="container">
        <Loading />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Ten</th>
              <th scope="col">So Dien Thoai</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{sv?.svId}</th>
              <td>{sv?.name}</td>
              <td>{sv?.sdt}</td>
              <td>{sv?.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

let mapDispatchToProp = (dispatch) => {
  return {
    onLoading: () => dispatch(actionBatLoading()),
    offLoading: () => dispatch(actionTatLoading()),
    onDetail: () => dispatch(actionBatDetail()),
  };
};

export default connect(null, mapDispatchToProp)(ChiTietSinhVien);
