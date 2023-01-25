import React, { useEffect } from 'react'
import styles from '@/components/flight-list/flightList.module.scss'
import FlightItem from '../flight-item/FlightItem'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFlights } from '@/store/flights/flights.actions';
import Filter from '@/components/filter-component/Filter';
import { getFilteredFlights } from '@/store/flights/flights.selector';

const FlightList = () => {
    const filteredFlights = useSelector(state => getFilteredFlights(state.flights))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFlights())
    }, [])
    return (
        <div className={styles.component}>
            <div className={styles.flightListPage}>
                <Filter/>
                <section className={styles.flightItems}>
                    {filteredFlights?.length > 0 && filteredFlights?.map((item, index) => {
                        return <FlightItem data={item} key={index} />
                    })}

                </section>
            </div>

        </div>
    )
}

export default FlightList