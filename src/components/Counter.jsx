import React, { Component, PropTypes } from 'react'

/*
这个ui组件有两个参数： counter和onIncreaseClick
counter需要从state计算得到
而方法需要向外发出action
*/

class Counter extends Component {
    static propTypes = {
  counter: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
  }
  render() {
    const { counter, onIncreaseClick } = this.props  
    return (
      <div>
        <span>{counter}</span>
        <button onClick={onIncreaseClick}>加</button>
      </div>
    )
  }
}


export default Counter


