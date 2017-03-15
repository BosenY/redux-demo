// Reducer
export default function counter(state =  Number(localStorage.number) || 0 , action) {
  switch (action.type) {
    case 'increase':
      localStorage.number = state + 1
      return state + 1
    case 'decrement':
      localStorage.number = state -1
      return state - 1
    default:
      return state
  }
}
// export default counter



