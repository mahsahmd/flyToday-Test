import { flightData } from "@/utils/flight-data"
import { GET_FLIGHTS } from "./flights.constants"

export const getFlights = () => {
    return {
        type: GET_FLIGHTS,
        payload: flightData
    }
}