import { GET_FLIGHTS, SET_FILTERS } from "./flights.constants";

const initialState = {
    airlines: null,
    flights: null,
    cities: null,
    airports: null,
    filters:[]

};

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
        case SET_FILTERS:{
            return {...state,filters:action.filters }
        }

        default:
            return state;
    }
}
export default flightReducer;