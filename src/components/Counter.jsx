import React, { Component, PropTypes } from 'react'
import './style.less'
/*
这个ui组件有两个参数： counter和onIncreaseClick
counter需要从state计算得到
而方法需要向外发出action
*/

class Counter extends Component {
  static propTypes = {
  counter: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: React.PropTypes.func.isRequired
  }
  render() {
    const { counter, onIncreaseClick,decrement,incrementAsync } = this.props  
    return (
      <div className="counter">
        <span>{counter}</span>
        <button className="btn" onClick={onIncreaseClick}>加</button>
        <button className="btn" onClick={decrement}>减</button>
        <button className="btn" onClick={incrementAsync}>Increment Async</button>
      </div>
    )
  }
}


export default Counter


