const moment = require("moment");

const checkDate = (date) => {
    return date ? date : new Date();
}

module.exports.validTimePeriod = ["1y", "6m", "30d", "7d", "1d"];

module.exports.getStartTimeFromParameter = (days) => {
    let startTime = -1;

    switch (days) {
        case '1y':
            startTime = moment().subtract(1, 'years');
            break;
        case '6m':
            startTime = moment().subtract(6, "months");
            break;
        case '30d':
            startTime = moment().subtract(30, 'days');
            break;
        case '90d':
            startTime = moment().subtract(90, "days");
            break;
        case '7d':
            startTime = moment().subtract(7, 'days');
            break;
        case '1d':
            startTime = moment().subtract(1, 'days');
            break;
    }

    return startTime;
}

module.exports.toMillisecondsTimestamp = (date) => {
    try {
        let selectedDate = checkDate(date);
        return moment(selectedDate).valueOf();
    } catch(err) {
        console.error(`[dateTimeHelper] toMilliTimestamp(): `,err);
    }
}
