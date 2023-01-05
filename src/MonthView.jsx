import DateComponent from "./DateComponent.jsx"

export default function MonthView(props) {
    const listOfDates = getDateList(props.month.year, props.month.month);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
    <>
        <h1 className="text-3xl mx-auto py-6 text-center">{monthNames[props.month.month]}</h1>
        <div className="grid grid-cols-7 gap-4 justify-center align-items-center border-t-2">
            <WeekBar />
            {/* Add extra days from previous month */}
            {listOfDates.last.map(date => {
                return (
                    DateComponent(date, false)
                )
            })}
            {/* Add days from current month */}
            {listOfDates.current.map(date => {
                return (
                    DateComponent(date, true)
                )
            })}
            {/* Add extra days from next month */}
            {listOfDates.next.map(date => {
                return (
                    DateComponent(date, false)
                )
            })}
        </div>
    </>
    )
}

function WeekBar() {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const bar = dayNames.map(dayNames => {
        return (
            <div className="h-auto w-auto m-2" key={dayNames}>{dayNames}</div>
        )
    })
    return(bar)
}

// Makes a list of all the dates to display in a month view calendar
function getDateList(year, month) {
    const firstOfMonth = new Date(year, month, 1);

    const lastOfMonth = new Date(year, month + 1);
    lastOfMonth.setDate(0);

    // Initializing object and arrays that will be returned
    const listOfDates = {};
    const lastMonthDates = [];
    const currentMonthDates = [];
    const nextMonthDates = [];

    const iDate = new Date(year, month);

    // Adding Previous Month Ending Dates
    for(let i = 0; i < firstOfMonth.getDay(); i++) {
        iDate.setDate(1 - firstOfMonth.getDay() + i);
        lastMonthDates.push(iDate.getDate())
    }
    listOfDates.last = lastMonthDates;
    
    iDate.setFullYear(year);
    iDate.setMonth(month);

    // Adding Current Month Dates
    for(let i = firstOfMonth.getDate(); i <= lastOfMonth.getDate(); i++) {
        iDate.setDate(i);
        currentMonthDates.push(iDate.getDate());
    }
    listOfDates.current = currentMonthDates;
    iDate.setDate(31);
    console.log(iDate.getDate());

    // Adding Next Month Starting Days
    for(let i = 1; i <= 6 - lastOfMonth.getDay(); i++) {
        iDate.setMonth(month);
        iDate.setDate(lastOfMonth.getDate() + i);
        nextMonthDates.push(iDate.getDate());
    }
    listOfDates.next = nextMonthDates;

    return(listOfDates);
}