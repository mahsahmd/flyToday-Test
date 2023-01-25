export function getFilteredFlights(state) {
  return filterFlights(state.flights, state.filters);
}

const filterFlights = (flights, filters) => {
  let filteredFlights = flights;
  for (const filter of filters) {
    if (filter.key === 'stopQuantity') {
      filteredFlights = filteredFlights.filter((flight) => {
        if (filter.values.includes('nonStop') && flight.flightInfo.stopQuantity === 0) {
          return true;
        }
        if (filter.values.includes('oneStop') && flight.flightInfo.stopQuantity  === 1) {
          return true;
        }
        if (filter.values.includes('multiStop') && flight.flightInfo.stopQuantity  > 1) {
          return true;
        }
        return false;
      });
    }else if(filter.key === 'isCharter') {
      filteredFlights = filteredFlights.filter((flight) => {
        if (filter.values.includes('true') && flight.flightInfo.isCharter === true) {
          return true;
        }
        if (filter.values.includes('false') && flight.flightInfo.stopQuantity  === false) {
          return true;
        }
        return false;
      });
    }
  }
  return filteredFlights;
};
