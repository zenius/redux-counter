import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./../actionCreators/actionCreators";

const Counter = props => {
  console.log(props);
  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={props.increment}> + </button>
      <button onClick={props.decrement}> - </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
