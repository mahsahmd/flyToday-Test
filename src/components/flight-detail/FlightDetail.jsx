import React from 'react';
import styles from "@/components/flight-detail/flightDetail.module.scss";
const FlightDetail = () => {

    return (
        <div className={styles.flightDetailSection}>
            <p className={styles.flightDesc}>پرواز رفت تهران-استانبول</p>
            <div className={styles.flighInfo}>
                <div className={styles.airlineInfo}>
                    <img alt="logo" className={styles.logo} src="/images/mahan.png" />
                    <p>ماهان</p>
                </div>
                <div className={styles.dottedSeparator}>
                    <div className={styles.circle}></div>
                    <div className={styles.dottedLine}></div>
                    <div className={styles.circle}></div>

                </div>
                <div className={styles.flighTimeLocationWrapper}>
                    <div className={styles.flighTimeLocation}>
                        <p style={{ display: 'flex', gap: '1rem' }}><span className={styles.bold}>12:45</span><span>تهران (THR)</span></p>
                        <div className={styles.seperator}></div>
                        <p><span>12 اردیبهشت 1399</span><span> (07 April)</span></p>
                        <div className={styles.seperator}></div>
                        <p className={styles.grayText}>Imam Khomeini Intl</p>
                    </div>
                    <div className={styles.extraInfoSection}>
                        <div className={styles.flightDetail}>
                            <div className={`${styles.wrapper} ${styles.duration}`}>
                                <p className={styles.title}>مدت پرواز</p>
                                <p>3 ساعت و 45 دقیقه</p>
                            </div>
                            <div className={`${styles.wrapper} ${styles.flightType}`}>
                                <p className={styles.title}>نوع پرواز</p>
                                <p>سیستمی</p>
                            </div>
                            <div className={`${styles.wrapper} ${styles.refund}`}>
                                <p className={styles.title}>استرداد</p>
                                <p style={{ color: "#ff1d23" }}>غیر قابل استرداد</p>
                            </div>
                            <div className={`${styles.wrapper} ${styles.airplaneType}`}>
                                <p className={styles.title}>نوع هواپیما</p>
                                <p>Airbus</p>
                            </div>
                            <div className={`${styles.wrapper} ${styles.cargo}`}>
                                <p className={styles.title}>بار مجاز</p>
                                <p>20 کیلوگرم</p>
                            </div>
                            <div className={`${styles.wrapper} ${styles.flightClass}`}>
                                <p className={styles.title}>کلاس پرواز</p>
                                <p>اکونومی</p>
                            </div>
                            <div className={`${styles.wrapper} ${styles.rateClass}`}>
                                <p className={styles.title}>کلاس نرخی</p>
                                <p>A</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flighTimeLocation}>
                        <p style={{ display: 'flex', gap: '1rem' }}><span className={styles.bold}>12:45</span><span>تهران (THR)</span></p>
                        <div className={styles.seperator}></div>
                        <p><span>12 اردیبهشت 1399</span><span> (07 April)</span></p>
                        <div className={styles.seperator}></div>
                        <p className={styles.grayText}>Imam Khomeini Intl</p>
                    </div>
                </div>
            </div>
            <div className={styles.amountSection}>
                <div className={styles.priceDetail}>
                    <p>2 * بزرگسال</p>
                    <p>1,370,000</p>
                </div>
                <div className={styles.priceDetail}>
                    <p>1 * کودک</p>
                    <p>1,370,000</p>
                </div>
                <div className={styles.priceDetail}>
                    <p>1 * کودک</p>
                    <p>1,370,000</p>
                </div>
                <div className={styles.amoutWrapper}>
                    <p className={styles.title}>مجموع :</p>
                    <p className={styles.amount}>1,370,000 <span>تومان</span></p>
                </div>
            </div>

        </div>
    )
}

export default FlightDetail