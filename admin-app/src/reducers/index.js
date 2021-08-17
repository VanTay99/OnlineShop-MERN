import authReducers from "./auth.reducers";
import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import categoryReducer from './category.reducer';
import productRecucer from './product.reducer';
import orderReducer from './order.reducer';
const rootReducer = combineReducers ({
    auth:authReducers,
    user:userReducer,
    category:categoryReducer,
    product:productRecucer,
    order:orderReducer
});

export default rootReducer;