import dayjs from "dayjs"
import Date from "./Date.jsx"

export default function MonthView(props) {
    const year = props.month.year;
    const month = props.month.int;
    const listOfDates = getDates(year, month);

    return (
    <>
        <h1 className="text-3xl mx-auto py-6 text-center">{month.str}</h1>
        <div className="grid grid-cols-7 gap-4 justify-center align-items-center border-t-2">
            <WeekBar />
            {/* Add extra days from previous month */}
            {listOfDates.last.map(date => {
                return (
                    Date(date, false)
                )
            })}
            {/* Add days from current month */}
            {listOfDates.current.map(date => {
                return (
                    Date(date, true)
                )
            })}
            {/* Add extra days from next month */}
            {listOfDates.next.map(date => {
                return (
                    Date(date, false)
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
function getDates(year, month) {
    
    const currentMonth = dayjs().year(year).month(month);
    const firstDateOfMonth = currentMonth.startOf("month");
    const lastDateOfMonth = currentMonth.endOf("month");

    // Initializing object and arrays that will be returned
    const listOfDates = {};
    const lastMonthDates = [];
    const currentMonthDates = [];
    const nextMonthDates = [];

    // Adding Previous Month Ending Dates
    for(let i = 0; i < firstDateOfMonth.day(); i++) {
        lastMonthDates.push(firstDateOfMonth.day(i));
    }
    listOfDates.last = lastMonthDates;
    
    // Adding Current Month Dates
    for(let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
        currentMonthDates.push(currentMonth.date(i));
    }
    listOfDates.current = currentMonthDates;

    // Adding Next Month Starting Days
    const remainder = 6 - lastDateOfMonth.day();
    for(let i = lastDateOfMonth.day() + 1; i <= 6; i++) {
        nextMonthDates.push(lastDateOfMonth.day(i));
    }
    listOfDates.next = nextMonthDates;
    
    return(listOfDates);
}