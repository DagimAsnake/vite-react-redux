import {createSlice} from '@reduxjs/toolkit'
import { UserList } from './Data'

const userSlice = createSlice({
    name: "users",
    initialState: UserList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})


export const {addUser} = userSlice.actions
export default userSlice.reducer