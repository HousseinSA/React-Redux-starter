import {ADD_USER , CHANGE_USERNAME , SEARCH_USER} from "../actionTypes"
const inialState = {
  users:[],
  username:"",
  search:""
}
export default function Reducer(state=inialState , action) {
    if(action.type === ADD_USER && action.payload !== undefined){
        return{ ...state ,users:[...state.users, action.payload]}
    }
    if(action.type === CHANGE_USERNAME && action.payload !== undefined){
      return {
        ...state , username:action.payload
      }
    }
    if(action.type === SEARCH_USER && action.payload !== undefined){
      return {
        ...state , search:action.payload
      }
    }
  return state
}
