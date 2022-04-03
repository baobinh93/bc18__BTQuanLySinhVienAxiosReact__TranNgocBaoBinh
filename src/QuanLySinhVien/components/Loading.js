import React, { Component } from "react";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
import { actionBatLoading, actionTatLoading } from "../redux/actions";
class Loading extends Component {
  render() {
    return this.props.isLoading ? (
      <ReactLoading type={"spin"} color={"red"} height={50} width={50} />
    ) : (
      <></>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isLoading: state.loadingReducer.isLoading,
  };
};
let mapDispatchToProp = (dispatch) => {
  return {
    onLoading: () => dispatch(actionBatLoading()),
    offLoading: () => dispatch(actionTatLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Loading);
