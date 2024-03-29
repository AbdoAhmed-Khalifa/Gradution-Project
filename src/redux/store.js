import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/User";

 const store = configureStore({
    reducer: {
        User: UserReducer
    }
 });

export default store;