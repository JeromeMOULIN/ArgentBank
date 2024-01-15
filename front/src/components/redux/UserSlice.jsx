import { configureStore, createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: "Profile",
    initialState: {
        user: {
            email: "",
            firstName: "",
            LastName: "",
            userName: "",
            token: "",
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setUserName: (state, action) => {
            state.user.userName = action.payload
        },
        setUserToken: (state, action) => {
            state.user.token = action.payload
        }
    },
})

export const mainStore = configureStore({
    reducer: {
        Profile: UserSlice.reducer
    }
})