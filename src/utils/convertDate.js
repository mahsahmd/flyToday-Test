import { fa } from 'date-fns/locale'
import { format as jalaliFormat, parseISO } from "date-fns-jalali"
import { format } from 'date-fns';


export const convertToJalali = (date) => {
    return jalaliFormat(new Date(date),' yyyy MMMM dd', {locale: fa})
}

export const getHourFromDate = (date) => {
    const newDate = new Date(date);
    return jalaliFormat(newDate, 'HH:mm')
}

export const getDate = (date) => {
    const newDate = new Date(date);
    return format(newDate,'d MMM');
}