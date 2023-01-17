import {createSelector} from "reselect"
export const usersSelectors=(state)=> state.users.users

export const filterUsersSelector= createSelector(
     state => state.users.users,
    state => state.users.search,
    (users, search)=>{
        return users.filter(user=> {
            return user.includes(search)
        })
    }
)
