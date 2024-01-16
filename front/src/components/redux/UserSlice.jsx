import { configureStore, createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: "Profile",
    initialState: {
        user: {
            email: "",
            firstName: "",
            LastName: "",
            userName: "",
        },
        connection: {
            token: "",
            isLogged: false,
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setUserName: (state, action) => {
            state.user.userName = action.payload
        },
        setLogin: (state, action) => {
            state.connection.token = action.payload
        },
        setLogged: (state, action) => {
            state.connection.isLogged = action.payload
        }
    },
})

export const mainStore = configureStore({
    reducer: {
        Profile: UserSlice.reducer
    }
})