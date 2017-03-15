export const onIncreaseClick = () => {
  return  { 
   type: 'increase'    
  }
}
export const  decrement = () => {
  return  { 
   type: 'decrement'    
  }
}
export function incrementAsync () {
  return  { 
   type: 'INCREMENT_ASYNC'    
  }
}