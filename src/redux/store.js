import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/User";
import ProductsReducer from "./slices/Products";

 const store = configureStore({
    reducer: {
        User: UserReducer,
        Products: ProductsReducer
    }
 });

export default store;