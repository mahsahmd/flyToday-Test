import { flightData } from "@/utils/flight-data"
import {  GET_FLIGHTS, SET_FILTERS } from "./flights.constants"

export const getFlights = () => {
    return {
        type: GET_FLIGHTS,
        payload: flightData
    }
}

export const setFilters = (filters) => {
    return {
        type : SET_FILTERS,
        filters
    }
}

