import React, { useState } from 'react'
import FlightDetail from './FlightDetail';
import styles from "@/components/flight-detail/moreInfo.module.scss";
import { TbPlaneDeparture } from "react-icons/tb"
import { IoDocumentOutline } from "react-icons/io5"
import { Terms } from './Terms';
import useMobileWidth from '@/utils/isMobileWidth';
import { IoCloseOutline } from 'react-icons/io5'
import AmountSubmitComponent from '../amount-submit/AmountSubmitComponent';

const MoreInfoComponent = ({ showDetail, setShowDetail }) => {
    const [selectedTab, setSelectedTab] = useState('flightDetail');
    const isMobileWidth = useMobileWidth()
    return (
        <div className={`${isMobileWidth ? styles.moreInfoMobileComponent : styles.moreInfoComponent} ${showDetail && styles.open}`}>
            {isMobileWidth && (<div className={styles.moreInfoheader}>
                <p className={styles.title}>جزییات پرواز</p>
                <p className={styles.closeIcon} onClick={() => setShowDetail(false)}><IoCloseOutline /></p>
            </div>)}
            <div className={styles.tabWrapper}>
                <div className={`${styles.tab} ${selectedTab === 'flightDetail' && styles.active}`} onClick={() => setSelectedTab('flightDetail')}> <TbPlaneDeparture />جزییات پرواز </div>
                <div className={`${styles.tab} ${selectedTab === 'terms' && styles.active}`} onClick={() => setSelectedTab('terms')}> <IoDocumentOutline /> قوانین و شرایط</div>

            </div>
            {
                selectedTab === 'flightDetail' ?
                    <FlightDetail /> : <Terms />
            }
            {(selectedTab === 'flightDetail' && isMobileWidth) && <AmountSubmitComponent className={(selectedTab === 'flightDetail' && isMobileWidth) ? 'modalView' : ''} setShowDetail={setShowDetail} />}
        </div>
    )
}

export default MoreInfoComponent