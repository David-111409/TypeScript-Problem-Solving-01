/**How Many Days Until 2021?
Given a date, return how many days date is away from 2021 (end date not included). date will be in mm/dd/yyyy format.

Examples

daysUntil2021("12/28/2020") ➞ "3 days"

daysUntil2021("1/1/2020") ➞ "366 days"

daysUntil2021("2/28/2020") ➞ "308 days"

Notes
All given dates will be in the year 2020. */

export function daysUntil2021(date: string):string{
    let [month, day, year] = date.split("/").map(Number);
    let iputDate = new Date(year, month - 1, day);
    let endDate = new Date(2021, 0, 1);
    let diff = (endDate.getTime() - iputDate.getTime()) / (1000 * 60 * 60 * 24);

    return `${diff} ${diff > 1 ? "days" : "day"}`;
}

console.log(daysUntil2021("12/28/2020"), "4 days")
console.log(daysUntil2021("1/1/2020"), "366 days")
console.log(daysUntil2021("2/28/2020"), "308 days")
console.log(daysUntil2021("6/30/2020"), "185 days")
console.log(daysUntil2021("10/22/2020"), "71 days")
console.log(daysUntil2021("12/31/2020"), "1 day")
