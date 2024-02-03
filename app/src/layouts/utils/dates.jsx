const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
];

const formattedDate = (date, mode=0) => {
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    if(mode===0) return `${day} ${month} ${year}`
    else if (mode === 1) return `${month} ${year}`;
    else return `${year}`;
};

export default formattedDate;