import React, { useEffect, useState } from 'react';
import styles from "@/components/flight-detail/flightDetail.module.scss";
import { toHoursAndMinutes } from "@/utils/minuteToHours"
import { enToFaDigitsWithComma } from '@/utils/enToFaDigits';
import { useSelector } from 'react-redux';
import { format } from "date-fns-jalali"
const FlightDetail = ({ data }) => {
    console.log(data, "datta details");
    const [departureAirport, setDepartureAirport] = useState({});
    const [arrivalAirport, setArrivalAirport] = useState({});

    const { airports } = useSelector(state => state.flights);

    useEffect(() => {
        setArrivalAirport(airports.find((airports) => airports.iata === data?.flightInfo?.arrivalAirportLocationCode))
        setDepartureAirport(airports.find((airports) => airports.iata === data?.flightInfo?.departureAirportLocationCode))
    }, [data]);

    return (
        <div className={styles.flightDetailSection}>
            <p className={styles.flightDesc}>{`پرواز رفت ${departureAirport.cityFa} - ${arrivalAirport.cityFa}`}</p>
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
                        <p className={styles.grayText}>{departureAirport.name}</p>
                    </div>
                    <div className={styles.extraInfoSection}>
                        <div className={styles.flightDetail}>
                            <div className={`${styles.wrapper} ${styles.duration}`}>
                                <p className={styles.title}>مدت پرواز</p>
                                <p>{toHoursAndMinutes(data?.flightInfo?.journeyDurationPerMinute)}</p>
                            </div>
                            <div className={`${styles.wrapper} ${styles.flightType}`}>
                                <p className={styles.title}>نوع پرواز</p>
                                <p>سیستمی</p>
                            </div>
                            <div className={`${styles.wrapper} ${styles.refund}`}>
                                <p className={styles.title}>استرداد</p>
                                <p style={{ color: "#ff1d23" }}> {data.flightInfo.isReturn ? 'قابل استرداد' : 'غیر قابل استرداد'}</p>
                            </div>
                            <div className={`${styles.wrapper} ${styles.airplaneType}`}>
                                <p className={styles.title}>نوع هواپیما</p>
                                <p>Airbus</p>
                            </div>
                            <div className={`${styles.wrapper} ${styles.cargo}`}>
                                <p className={styles.title}>بار مجاز</p>
                                <p>{data.flightInfo.baggage ? `${data.flightInfo.baggage} + kg` : '-'}</p>
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
                        <p className={styles.grayText}>{arrivalAirport.name}</p>
                    </div>
                </div>
            </div>
            <div className={styles.amountSection}>
                {
                    data?.priceInfo?.ptcFareBreakdown?.map((passenger, index) => {
                        return (
                            <div key={index}>
                                <div className={styles.priceDetail}>
                                    <p>{passenger.passengerTypeQuantity.quantity} × {passenger.passengerTypeQuantity.passengerType === 'Adt' ? 'بزرگسال' : 'کودک'}  </p>
                                    <p>{enToFaDigitsWithComma(passenger?.passengerFare?.totalFareWithMarkupAndVat)} تومان</p>
                                </div>
                            </div>
                        )
                    })
                }

                <div className={styles.amoutWrapper}>
                    <p className={styles.title}>مجموع :</p>
                    <p className={styles.amount}>{enToFaDigitsWithComma(data?.priceInfo?.itinTotalFare?.totalFare)} <span>تومان</span></p>
                </div>
            </div>

        </div>
    )
}

export default FlightDetail