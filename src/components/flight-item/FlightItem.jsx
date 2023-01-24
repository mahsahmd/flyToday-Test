import React, { useState } from 'react';
import styles from "@/components/flight-item/flightItem.module.scss";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { toHoursAndMinutes } from "@/utils/minuteToHours"
import MoreInfoComponent from '@/components/flight-detail/MoreInfoComponent';
import AmountSubmitComponent from '@/components/amount-submit/AmountSubmitComponent';
const FlightItem = ({ data }) => {
    const [showDetail, setShowDetail] = useState(false);
    return (
        <div className={styles.flightItemSection}>

            <div className={styles.flightWrapper}>
                <div className={styles.mainFlightInfoSection}>
                    <div className={styles.flex}>
                        <img alt="logo" className={styles.logo} src="/images/mahan.png" />
                        <p>ماهان</p>
                    </div>
                    <div className={styles.flightInfo}>
                        <div className={styles.timeLocation}>
                            <p>12:45</p>
                            <p>تهران
                                <span>(IST)</span>

                            </p>

                        </div>

                        <div className={styles.durationWrapper}>
                            <p>{toHoursAndMinutes(data?.flightInfo?.journeyDurationPerMinute)}</p>
                            <div className={styles.duration}>
                                <div className={`${styles.circle} ${styles.blue}`}></div>
                                <div className={styles.line}></div>

                                <div className={`${styles.circle} ${styles.orange}`}></div>
                            </div>
                        </div>
                        <div className={styles.timeLocation}>
                            <p>12:45</p>
                            <p>تهران
                                <span>(IST)</span>
                            </p>

                        </div>
                    </div>
                </div>
                <AmountSubmitComponent price={data?.priceInfo?.itinTotalFare?.totalFare} setShowDetail={setShowDetail} />
                <div className={styles.secondaryFlightInfoSection}>
                    <span className={styles.active}>چارتر</span>
                    <span>اکونومی</span>
                    <span>.</span>
                    <span>{data?.flightInfo?.seatsRemaining} صندلی خالی</span>
                    <span>.</span>
                    <span>شماره پرواز: {data?.flightInfo?.flightNumber}</span>
                    <span>.</span>
                    <span>تامین کننده:پرایس لاین</span>
                </div>
                <p onClick={() => setShowDetail(state => !state)} className={styles.moreInfo}>جزییات بیشتر {showDetail ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}</p>


            </div>
            <MoreInfoComponent data={data} showDetail={showDetail} setShowDetail={setShowDetail} />


        </div>
    )
}

export default FlightItem