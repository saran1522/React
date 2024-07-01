import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";

// configureStore by default combines thunk middleware and redux devtools
const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});

export default store;

// action creators
