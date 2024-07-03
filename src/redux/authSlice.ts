import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const login = createAsyncThunk("login", async () => {
    try {

        
    } catch (error) {

    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState: {

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {

            })
            .addCase(login.fulfilled, (state, action) => {

            })
            .addCase(login.rejected, (state, action) => {

            })
    }
})


export default authSlice.reducer
