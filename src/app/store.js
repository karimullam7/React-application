import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../services/Api";

export const store = configureStore({

    reducer :{},

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),

})