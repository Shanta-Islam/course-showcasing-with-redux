// import { createSlice } from "@reduxjs/toolkit";

// export const UserSlice = createSlice({ 
//     name: "user",
//     initialState: {
//         user: null,
//         token: null
//     },
//     reducers:{
//         login: (state, action)=>{
//             state.user = action.payload,
//             state.token = action.payload
//         },
//         logout: (state)=>{
//             state.user = null;
//             state.token = null;
//         }
//     }
// })

// export const {login, logout} = UserSlice.actions;
// export const selectUser = (state)=> state.user.user;
// export const selectToken = (state)=> state.user.token;

// export default UserSlice.reducer;






import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: true,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload; 
        },
        logoutUser: (state) => {
            state.user = null;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { loginUser, logoutUser, setLoading } = userSlice.actions;
export const selectUser = (state)=> state.user.user;
export const selectLoading = (state)=> state.user.isLoading;