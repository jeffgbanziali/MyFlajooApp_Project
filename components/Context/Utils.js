export const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    );
};

export const dateParser = (num) => {
    let options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    let timestamp = Date.parse(num);

    let date = new Date(timestamp).toLocaleDateString("fr-FR", options);

    return date.toString();
};

export const timestampParser = (num) => {
    let options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    let date = new Date(num).toLocaleDateString("fr-FR", options);

    return date.toString();
};

export const formatPostDate = (timestamp) => {
    const currentDate = new Date();
    const postDate = new Date(timestamp);
    const timeDifference = currentDate - postDate;

    const millisecondsPerSecond = 1000;
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hoursPerDay = 24;
    const daysPerWeek = 7;
    const daysPerYear = 365;

    const millisecondsPerMinute = millisecondsPerSecond * secondsPerMinute;
    const millisecondsPerHour = millisecondsPerMinute * minutesPerHour;
    const millisecondsPerDay = millisecondsPerHour * hoursPerDay;
    const millisecondsPerWeek = millisecondsPerDay * daysPerWeek;
    const millisecondsPerYear = millisecondsPerDay * daysPerYear;

    if (timeDifference < millisecondsPerMinute) {
        const secondsAgo = Math.floor(timeDifference / millisecondsPerSecond);
        return `il y a ${secondsAgo} seconde(s)`;
    } else if (timeDifference < millisecondsPerHour) {
        const minutesAgo = Math.floor(timeDifference / millisecondsPerMinute);
        return `il y a ${minutesAgo} minute(s)`;
    } else if (timeDifference < millisecondsPerDay) {
        const hoursAgo = Math.floor(timeDifference / millisecondsPerHour);
        return `il y a ${hoursAgo} heure(s)`;
    } else if (timeDifference < millisecondsPerWeek) {
        const daysAgo = Math.floor(timeDifference / millisecondsPerDay);
        return `il y a ${daysAgo} jour(s)`;
    } else if (timeDifference < millisecondsPerYear) {
        const weeksAgo = Math.floor(timeDifference / millisecondsPerWeek);
        return `il y a ${weeksAgo} semaine(s)`;
    } else {
        const yearsAgo = Math.floor(timeDifference / millisecondsPerYear);
        return `il y a ${yearsAgo} an(s)`;
    }
};
