import Todo from '../pages/todo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from '../actions/index'

const mapStateToProps = state => {
  let { todolist } = state
  return {
    todolist
  }
}

const mapDispatchToProps = dispatch =>  bindActionCreators(Actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

