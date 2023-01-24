import React, { useState } from 'react';
import styles from "@/components/flight-item/flightItem.module.scss";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { enToFaDigitsWithComma } from '@/utils/enToFaDigits';
import { toHoursAndMinutes } from "@/utils/minuteToHours"
import MoreInfoComponent from '../flight-detail/MoreInfoComponent';
import useMobileWidth from '@/utils/isMobileWidth';
const FlightItem = ({ data }) => {
    const [showDetail, setShowDetail] = useState(false);
    const isMobileWidth = useMobileWidth();
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
                            <p>{toHoursAndMinutes(data?.originDestinationOptions[0]?.flightSegments[0].journeyDurationPerMinute)}</p>
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
                <div className={styles.flightPriceSection}>
                    <p className={styles.person}>یک نفر</p>
                    <p className={styles.price}>{enToFaDigitsWithComma(1370000)} <span>تومان</span> </p>
                    <button>{isMobileWidth ? "جزئیات و انتخاب " : "انتخاب بلیط"}</button>
                </div>
                <div className={styles.secondaryFlightInfoSection}>
                    <span className={styles.active}>چارتر</span>
                    <span>اکونومی</span>
                    <span>.</span>
                    <span>7 صندلی خالی</span>
                    <span>.</span>
                    <span>شماره پرواز: 4444</span>
                    <span>.</span>
                    <span>تامین کننده:پرایس لاین</span>
                </div>
                <p onClick={() => setShowDetail(state => !state)} className={styles.moreInfo}>جزییات بیشتر {showDetail ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}</p>


            </div>
            <MoreInfoComponent showDetail={showDetail} />


        </div>
    )
}

export default FlightItem