import Counter from '../components/Counter.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CounterActions from '../actions/index'

const mapStateToProps = state => {
  let { count } = state
  return {
    count
  }
}

const mapDispatchToProps = dispatch =>  bindActionCreators(CounterActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
