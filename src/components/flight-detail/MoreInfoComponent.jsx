import React, { useState } from 'react'
import FlightDetail from './FlightDetail';
import styles from "@/components/flight-detail/moreInfo.module.scss";
import { TbPlaneDeparture } from "react-icons/tb"
import { IoDocumentOutline } from "react-icons/io5"
import { Terms } from './Terms';
const MoreInfoComponent = ({ showDetail }) => {
    const [selectedTab, setSelectedTab] = useState('flightDetail');
    return (
        <div className={`${styles.moreInfoComponent} ${showDetail && styles.open}`}>
            <div className={styles.tabWrapper}>
                <div className={`${styles.tab} ${selectedTab === 'flightDetail' && styles.active}`} onClick={() => setSelectedTab('flightDetail')}> <TbPlaneDeparture />جزییات پرواز </div>
                <div className={`${styles.tab} ${selectedTab === 'terms' && styles.active}`} onClick={() => setSelectedTab('terms')}> <IoDocumentOutline /> قوانین و شرایط</div>

            </div>
            {
                selectedTab === 'flightDetail' ?
                    <FlightDetail /> : <Terms />
            }
        </div>
    )
}

export default MoreInfoComponent