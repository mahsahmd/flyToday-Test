import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

const useMapAirportdata = (data) => {
    const [departureAirport, setDepartureAirport] = useState({});
    const [arrivalAirport, setArrivalAirport] = useState({});
    const { airports } = useSelector(state => state.flights);

    useEffect(() => {
        setArrivalAirport(airports.find((airports) => airports.iata === data?.flightInfo?.arrivalAirportLocationCode))
        setDepartureAirport(airports.find((airports) => airports.iata === data?.flightInfo?.departureAirportLocationCode))
    }, [data]);
    return {
        departureAirport,
        arrivalAirport
    }
}

export default useMapAirportdata