import Counter from '../components/Counter.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CounterActions from '../actions/index'

/*
 mapStateToProps负责将更新后的state传给UI组件
 mapDispatchToProps负责将dispatch的action传给ui组件
*/
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

// const increaseAction = { type: 'increase' }
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => {
//     return  dispatch({ type: 'increase' })
//     }
//   }
// }
const mapDispatchToProps = dispatch =>  bindActionCreators(CounterActions, dispatch)

// Action Creator

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
 

// export default App