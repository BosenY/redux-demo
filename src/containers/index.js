import Counter from '../components/Counter.jsx'
import { connect } from 'react-redux'



/*
 mapStateToProps负责将更新后的state传给UI组件
 mapDispatchToProps负责将dispatch的action传给ui组件
*/
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

// const increaseAction = { type: 'increase' }
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => {
        console.log('111')
    return  dispatch({ type: 'increase' })
    }
  }
}

// Action Creator

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
 

// export default App