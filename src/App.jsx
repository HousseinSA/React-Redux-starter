import React from "react"
import {useState} from "react"
import {connect , useDispatch, useSelector} from "react-redux"
import {addUser} from "./actions"
import {ADD_USER , CHANGE_USERNAME ,SEARCH_USER} from "./actionTypes"
import { filterUsersSelector, usersSelectors } from "./Reducers/Selectors"
function App(props) {
  const [user, setUser] = useState("")
  const users = useSelector(usersSelectors)
  const filterdUsers = useSelector(filterUsersSelector)
  const search= useSelector(state=>state.users.search)
const dispatch = useDispatch()
  console.log("users", users)
  console.log("filterdUsers", filterdUsers)
  function addNewUsers() {
  dispatch(addUser(ADD_USER , user))
  }
  function handelUser(e) {
   dispatch(addUser(CHANGE_USERNAME ,e.target.value ))
    setUser(e.target.value)
  }
  function handelSearch(e){
    dispatch(addUser(SEARCH_USER ,e.target.value ))
  }
  return (
    <div>
      <input type="text" onChange={handelUser} />
      <button onClick={addNewUsers}>Add user</button>
      <input type="text" placeholder="Search" onChange={handelSearch}  value={search}/>
      <ul>
        { users.map((user, index) => {
          return <li key={index}>{user}</li>
        })}
      </ul>
    </div>
  )
}
function mapStateToProps(state) {

  return {
    users:usersSelectors(state),
    search:state.users.search,
    filterUsers:filterUsersSelector(state)
  }
}

export default connect(mapStateToProps )(App)
