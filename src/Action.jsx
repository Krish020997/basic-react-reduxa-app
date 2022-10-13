export const Addname = (value) => async dispatch =>{
    dispatch({
        type:"ADD",
        payload: value
    })
}
export const Delname = (value) => async dispatch =>{
dispatch({
    type:"REMOVE",
    payload: {name:value}
})
}