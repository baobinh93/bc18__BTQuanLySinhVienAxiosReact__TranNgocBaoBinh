import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { actionTatDetail } from "../../redux/actions";
class NavRouter extends Component {
  render() {
    //console.log(this.props.detailComponent);
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink
                className="mr-3 text-primary"
                activeClassName="text-danger"
                to="/"
                onClick={() => this.props.offDetail()}
              >
                Trang Chủ
              </NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink
                activeClassName="text-danger"
                to="/dssv"
                onClick={() => this.props.offDetail()}
              >
                Danh Sách
              </NavLink>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              hidden={this.props.detailComponent}
            >
              Chi Tiết
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    detailComponent: state.breadcumbComponentReducer,
  };
};
let mapDispatchToProp = (dispatch) => {
  return {
    offDetail: () => dispatch(actionTatDetail()),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(NavRouter);
