import React, { useEffect } from 'react'
import styles from '@/components/flight-list/flightList.module.scss'
import FlightItem from '../flight-item/FlightItem'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFlights } from '@/store/flights/flights.actions';

const FlightList = () => {
    const { flights } = useSelector(state => state.flights);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFlights())
    }, [])
    return (
        <div className={styles.component}>
            <div className={styles.flightListPage}>
                <p>hi</p>
                <section className={styles.flightItems}>
                    {flights?.map((item, index) => {
                        return <FlightItem data={item} key={index} />
                    })}

                </section>
            </div>

        </div>
    )
}

export default FlightList