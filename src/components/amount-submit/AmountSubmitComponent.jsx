import React from 'react'
import useMobileWidth from '@/utils/isMobileWidth';
import styles from "@/components/amount-submit/amountSubmit.module.scss"
import { enToFaDigitsWithComma } from '@/utils/enToFaDigits';

const AmountSubmitComponent = ({ setShowDetail, className }) => {
  const isMobileWidth = useMobileWidth();
  return (
    <div className={`${styles.flightPriceSection} ${styles[className]}`}>
      <p className={styles.person}>یک نفر</p>
      <p className={styles.price}>{enToFaDigitsWithComma(1370000)} <span>تومان</span> </p>
      <button onClick={() => isMobileWidth && setShowDetail(state => !state)}>{isMobileWidth ? "جزئیات و انتخاب " : "انتخاب بلیط"}</button>
    </div>
  )
}

export default AmountSubmitComponent