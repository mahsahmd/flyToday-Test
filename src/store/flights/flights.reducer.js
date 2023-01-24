import { GET_FLIGHTS } from "./flights.constants";

const initialState = {
    airlines: null,
    flights: null,
    cities: null,
    airports: null

};

const mapAirlineIataToName = (iata) => {

}
const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FLIGHTS:
            return {
                ...state,
                airlines: action.payload.additionalData.airlines,
                flights: action.payload.pricedItineraries.map((item) => {
                    return {
                        flightInfo: item?.originDestinationOptions[0]?.flightSegments[0],
                        priceInfo: item?.airItineraryPricingInfo
                    }
                }),
                cities: action.payload.additionalData.cities,
                airports: action.payload.additionalData.airports,

            }
        default:
            return state;
    }
}
export default flightReducer;