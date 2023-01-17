
export const addUser=(type, payload)=>{
    return   (dispatch)=>{
        dispatch({type: type, payload:payload})    
    }     
}