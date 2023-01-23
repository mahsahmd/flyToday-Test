import React from 'react';
import styles from "@/components/flight-detail/flightDetail.module.scss";

const FlightDetail = ({ showDetail = true }) => {
    return (
        <div className={`${styles.flightDetailSection} ${showDetail && styles.open}`}>
            <p>پرواز رفت تهران-استانبول</p>
            <div>
                <img alt="logo" className={styles.logo} src="/images/mahan.png" />
                <div>
                    <div>
                        <div></div>
                        <p><span>تهران(THR)</span><span>12:45</span></p>
                        <p><span>12 اردیبهشت 1399</span><span>12:45</span></p>
                        <p>Imam Khomeini Intl</p>
                    </div>
                    <div>
                        <p>مدت پرواز</p>
                        <p>نوع هواپیما</p>
                        <p>کلاس پرواز</p>
                        <p>3 ساعت و 45 دقیقه</p>
                        <p>Airbus</p>
                        <p>اکونومی</p>
                        <p>نوع پرواز</p>
                        <p>بار مجاز</p>
                        <p>کلاس نرخی</p>
                        <p>سیستمی</p>
                        <p>20 کیلوگرم</p>
                        <p>A</p>
                        <p>استرداد</p>
                        <p>غیر قابل استرداد</p>

                    </div>
                    <div>
                        <div></div>
                        <p><span>تهران(THR)</span><span>12:45</span></p>
                        <p><span>12 اردیبهشت 1399</span><span>12:45</span></p>
                        <p>Imam Khomeini Intl</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightDetail