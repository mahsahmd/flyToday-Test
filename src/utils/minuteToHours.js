export function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    if (minutes > 0) {
        return `${hours} ساعت و ${minutes} دقیقه`;

    } else {
        return `${hours} ساعت`;
    }
}

