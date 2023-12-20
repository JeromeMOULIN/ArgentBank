import { configureStore, createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name : "Profile",
    initialState: {
        email: "",
        firstName: "",
        LastName: "",
        userName: "",
    },
    reducers:{
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.LastName = action.payload
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
    },
})

export const mainStore = configureStore({
    reducer: {
        Profile: UserSlice.reducer
    }
})