export const add = (text) => {
  return  {
   type: 'add',
   text
  }
}
export const  toggle = (index) => {
  return  {
   type: 'toggle',
   index
  }
}
export const deletealist =  (index) =>  {
  return  {
   type: 'delete',
   index
  }
}