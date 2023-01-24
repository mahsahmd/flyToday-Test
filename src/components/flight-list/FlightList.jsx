import React from 'react'
import styles from '@/components/flight-list/flightList.module.scss'
import FlightItem from '../flight-item/FlightItem'
const FlightList = (data) => {
    return (
        <div className={styles.component}>
            <div className={styles.flightListPage}>
                <div className={styles.filterComponent}>hi</div>
                <section className={styles.flightItems}>
                    {data?.data?.map((item, index) => {
                        return <FlightItem data={item} key={index} />
                    })}

                </section>
            </div>

        </div>
    )
}

export default FlightList