let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function isLeapYear(year){
    return (year%4==0 && year%100!==0)|| (year%400===0);
}
function daysBetween(day, month1, year) {
    

    let date=new Date();
    let currentDay=date.getDate();
    let currentMonth=date.getMonth()+1;
    let currentYear=date.getFullYear();

    // Adjust February for leap years
    if (isLeapYear(year)) {
        month[1]=29;
    }

    let totalDays=0;

    // suppose  If the years are different
    if (year<currentYear) {
        
        totalDays+=month[month1-1]-day;
        for (let i=month1;i<12;i++) {
            totalDays+=month[i];
        }

        // Count days in the current year
        for (let i = 0; i < currentMonth-1;i++) {
            totalDays+=month[i];
        }
        totalDays+=currentDay;
    } 
    // year same ho to 
    else {
        for (let i=month1-1;i<currentMonth-1;i++) {
            totalDays+=month[i];
        }
        totalDays+=currentDay-day;
    }

    return totalDays;
}

// Example usage
let day=10, month1=2, year=2025;
// console.log(daysBetween(day, month1, year));

export default daysBetween(day,month1,year);