// Reducer
export default function todolist(state = [], action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                time: new Date(),
                text: action.text,
                state: 'todo'
                }
            ]
        case 'toggle':
                // console.log(action.index)
            if(state[action.index].state === 'todo') {
                return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                state: 'done'
                }),
                ...state.slice(action.index + 1)
                ]
            } else {
                return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                state: 'todo'
                }),
                ...state.slice(action.index + 1)
                ]
            }
        case 'delete':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}
