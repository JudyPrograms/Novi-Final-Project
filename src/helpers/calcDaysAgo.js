function calcDaysAgo (startDate) {

    let today = new Date();
    today.setHours(0, 0, 0, 0)

    let start = new Date(startDate)
    start.setHours(0, 0, 0, 0)

    const msInDay = 24 * 60 * 60 * 1000

    const daysAgo = (today - start) / (msInDay)

    return (daysAgo)
}

export default calcDaysAgo;