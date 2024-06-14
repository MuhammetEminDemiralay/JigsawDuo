import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import fileSlice from "./fileSlice";


const store = configureStore({
    reducer: {
        file: fileSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export default store