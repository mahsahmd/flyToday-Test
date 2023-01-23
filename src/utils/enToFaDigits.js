export const enToFaDigits = (input) => {
    if (typeof input !== "string" && isNaN(input)) {
        return '';
    }
    const regex = /[0-9]/g;
    const result = input.toString().replace(regex, function (w) {
        return String.fromCharCode(w.charCodeAt(0) + 1728);
    });
    return result;
};

export const enToFaDigitsWithComma = function (number) {
    const num = +number;
    if (Number.isNaN(num)) return enToFaDigits(number);
    let result =Number(number).toLocaleString();
    result = enToFaDigits(result)
    return result;
}


export const enStringToFaDigits = s => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
