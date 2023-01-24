import { combineReducers, configureStore } from "@reduxjs/toolkit";
import flightReducer from "@/store/flights/flights.reducer";
const reducer = combineReducers({
    flights: flightReducer
});

const store = configureStore({
    reducer,
});
export default store;
