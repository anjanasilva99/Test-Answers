Date.prototype.daysTo = function (date) {
    // Validate input date
    if(!(date instanceof Date)) {
        throw new TypeError('Invalid input date (Argument must be a Date object)');
    }

    // Create copies to avoid modifying original dates
    const date1 = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    const date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    // Calculate difference in milliseconds
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const differenceMs = date2.getTime() - date1.getTime();

    // Calculate difference in days
    return Math.floor(differenceMs / millisecondsPerDay);
};


const startDate = new Date('2024-12-25');
const endDate = new Date('2025-01-01');

// Positive days forward
console.log(startDate.daysTo(endDate));
// Negative days backward
console.log(endDate.daysTo(startDate));
// Same date
console.log(startDate.daysTo(startDate));
