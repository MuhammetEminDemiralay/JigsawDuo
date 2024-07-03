import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import fileSlice from "./fileSlice";
import authSlice from "./authSlice";


const store = configureStore({
    reducer: {
        file: fileSlice,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export default store