import React, {Component} from 'react'
import './style.less'
/* eslint-disable */
export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }
    // totallength = () => this.props.todolist.length
    componentWillMount = () => {
        console.log(this.props)
    }
    handleChange(event) {
        console.log(event.target.value)
        this.setState({text: event.target.value});
    }
    handleKeyDown(e) {
        if (e.keyCode == "13") {
            this.props.add(this.state.text)
            this.setState({text: ''})
        }
    }

    render() {
        let {todolist, add, toggle, deletealist} = this.props, {text} = this.state
        return (
            <div className="todoContainer">
                <div className="todoinput">
                    <input
                        className="new-todo"
                        type="text"
                        value={text}
                        onChange={(e) => this.handleChange(e)}
                        onKeyDown={(e) => {
                        if (text !== '') {
                            this.handleKeyDown(e)
                        }
                    }}
                        placeholder="What needs to be done?"/>
                </div>
                <div className={`list`}>
                    {todolist.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.state === 'todo'
                            ? ''
                            : 'delete'}`}>
                            <button onClick={toggle.bind(this, index)}>o</button>
                            {item.text}
                            <button onClick={deletealist.bind(this, index)}>x</button>
                        </div>
                    ))}
                </div>
                <div className="num">
                    <div>totalLength:{todolist.length}</div>
                    <div>todoLength:{todolist.filter(item => item.state === 'todo').length}</div>
                    <div>doneLength:{todolist.filter(item => item.state === 'done').length}</div>
                </div>
            </div>
        )
    }
}